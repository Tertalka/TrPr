export declare enum Category {
    BusinessAnalyst = 0,
    Developer = 1,
    Designer = 2,
    QA = 3,
    ScrumMaster = 4
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
//# sourceMappingURL=types.d.ts.map