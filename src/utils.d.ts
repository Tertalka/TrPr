import { Worker, Category } from './types';
export declare function logFirstAvailable(workers?: Worker[]): void;
export declare function getWorkersSurnamesByCategory(category?: Category): string[];
export declare function logWorkersNames(names: string[]): void;
export declare const getWorkerByID: (id: number) => Worker | undefined;
export declare function createCustomerID(name: string, id: number): string;
export declare let idGenerator: (name: string, id: number) => string;
export declare function createCustomer(name: string, age?: number, city?: string): void;
export declare function checkoutWorkers(customer: string, ...workerIDs: number[]): string[];
//# sourceMappingURL=utils.d.ts.map