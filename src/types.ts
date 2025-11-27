    // Shared types and enums
export enum Category {
  BusinessAnalyst,
  Developer,
  Designer,
  QA,
  ScrumMaster
}

export interface Worker {
  id: number;
  name: string;
  surname: string;
  available: boolean;
  salary: number;
  category: Category;
}

export type WorkerID = number;
