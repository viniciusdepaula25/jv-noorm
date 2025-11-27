export interface MigrationsDTO {
  id: number;
  executedScript: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: string;
}
