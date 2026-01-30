/**
 * Team entity
 */
export interface Team {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

/**
 * Data required to create a new team
 */
export interface CreateTeamInput {
  name: string;
  description?: string | null;
}

/**
 * Data for updating a team
 */
export interface UpdateTeamInput {
  name?: string;
  description?: string | null;
}

/**
 * Team with member count for list views
 */
export interface TeamWithMemberCount extends Team {
  memberCount: number;
}
