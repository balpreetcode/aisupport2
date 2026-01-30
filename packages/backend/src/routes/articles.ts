import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { permissions } from '../middleware/permissions';
import { prisma } from '../config/database';
import { NotFoundError } from '../utils/errors';

const router = Router();

/**
 * GET /api/articles
 * List articles (with optional search)
 */
router.get('/', auth(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { search, category, status = 'published', page = '1', limit = '50' } = req.query;
    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

    const where: Record<string, unknown> = {};

    // Non-admins can only see published articles
    if (req.auth!.role === 'agent') {
      where.status = 'published';
    } else if (status) {
      where.status = status;
    }

    if (category) {
      where.categoryId = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where: where as any,
        orderBy: { updatedAt: 'desc' },
        skip,
        take: parseInt(limit as string),
        include: {
          category: { select: { id: true, name: true } },
          author: { select: { id: true, name: true } },
        },
      }),
      prisma.article.count({ where: where as any }),
    ]);

    res.json({
      data: articles,
      total,
      page: parseInt(page as string),
      limit: parseInt(limit as string),
      totalPages: Math.ceil(total / parseInt(limit as string)),
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/articles/:id
 * Get article by ID
 */
router.get('/:id', auth(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const article = await prisma.article.findUnique({
      where: { id: req.params.id },
      include: {
        category: true,
        author: { select: { id: true, name: true, email: true } },
      },
    });

    if (!article) {
      throw new NotFoundError('Article not found');
    }

    // Increment view count
    await prisma.article.update({
      where: { id: req.params.id },
      data: { viewCount: { increment: 1 } },
    });

    res.json(article);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/articles
 * Create article (admin/supervisor only)
 */
router.post(
  '/',
  auth(),
  permissions(['admin', 'supervisor']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, content, categoryId, tags = [], status = 'draft', visibility = 'internal' } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      const article = await prisma.article.create({
        data: {
          title,
          content,
          categoryId,
          tags,
          status,
          visibility,
          authorId: req.auth!.userId,
          publishedAt: status === 'published' ? new Date() : null,
        },
        include: {
          category: true,
          author: { select: { id: true, name: true } },
        },
      });

      res.status(201).json(article);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PATCH /api/articles/:id
 * Update article
 */
router.patch(
  '/:id',
  auth(),
  permissions(['admin', 'supervisor']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, content, categoryId, tags, status, visibility } = req.body;

      const existing = await prisma.article.findUnique({ where: { id: req.params.id } });

      if (!existing) {
        throw new NotFoundError('Article not found');
      }

      const article = await prisma.article.update({
        where: { id: req.params.id },
        data: {
          title,
          content,
          categoryId,
          tags,
          status,
          visibility,
          publishedAt: status === 'published' && existing.status !== 'published' ? new Date() : undefined,
        },
        include: {
          category: true,
          author: { select: { id: true, name: true } },
        },
      });

      res.json(article);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * DELETE /api/articles/:id
 * Delete article (admin only)
 */
router.delete(
  '/:id',
  auth(),
  permissions(['admin']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const existing = await prisma.article.findUnique({ where: { id: req.params.id } });

      if (!existing) {
        throw new NotFoundError('Article not found');
      }

      await prisma.article.delete({ where: { id: req.params.id } });

      res.json({ message: 'Article deleted' });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/articles/categories
 * List article categories
 */
router.get('/meta/categories', auth(), async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await prisma.articleCategory.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { articles: true } },
      },
    });

    res.json({ data: categories });
  } catch (error) {
    next(error);
  }
});

export default router;
