import 'dotenv/config';
import { prisma } from '../config/database';
import { hashPassword } from '../utils/password';

async function seed() {
  console.log('🌱 Seeding database...');

  // Create default admin user
  const adminPassword = await hashPassword('Admin123!');

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      passwordHash: adminPassword,
      name: 'System Admin',
      role: 'admin',
      status: 'active',
    },
  });

  console.log(`✅ Admin user created: ${admin.email}`);

  // Create a default team
  const team = await prisma.team.upsert({
    where: { name: 'Support Team' },
    update: {},
    create: {
      name: 'Support Team',
      description: 'Default support team',
    },
  });

  console.log(`✅ Team created: ${team.name}`);

  // Create a supervisor
  const supervisorPassword = await hashPassword('Super123!');

  const supervisor = await prisma.user.upsert({
    where: { email: 'supervisor@example.com' },
    update: {},
    create: {
      email: 'supervisor@example.com',
      passwordHash: supervisorPassword,
      name: 'Team Supervisor',
      role: 'supervisor',
      status: 'active',
      teamId: team.id,
    },
  });

  console.log(`✅ Supervisor user created: ${supervisor.email}`);

  // Create an agent
  const agentPassword = await hashPassword('Agent123!');

  const agent = await prisma.user.upsert({
    where: { email: 'agent@example.com' },
    update: {},
    create: {
      email: 'agent@example.com',
      passwordHash: agentPassword,
      name: 'Support Agent',
      role: 'agent',
      status: 'active',
      teamId: team.id,
    },
  });

  console.log(`✅ Agent user created: ${agent.email}`);

  console.log('\n📋 Default credentials:');
  console.log('   Admin:      admin@example.com / Admin123!');
  console.log('   Supervisor: supervisor@example.com / Super123!');
  console.log('   Agent:      agent@example.com / Agent123!');

  console.log('\n✨ Seeding complete!');
}

seed()
  .catch((error) => {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
