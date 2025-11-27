interface Worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    markPrize?: PrizeLogger;
}
declare function getAllWorkers(): Worker[];
declare function getWorkerByID(id: number): Worker | undefined;
declare function PrintWorker(worker: Worker): void;
declare const allWorkers: Worker[];
declare const worker1: Worker | undefined;
declare const notFoundWorker: Worker | undefined;
interface PrizeLogger {
    (reason: string): void;
}
declare const logPrize: PrizeLogger;
declare const workerWithPrize: Worker;
interface Person {
    name: string;
    email: string;
}
interface Author extends Person {
    numBooksPublished: number;
}
interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}
declare const favoriteAuthor: Author;
declare class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    constructor(name: string, email: string, department: string);
    assistCustomer(custName: string): void;
}
declare let favoriteLibrarian: Librarian;
declare abstract class ReferenceItem {
    title: string;
    protected year: number;
    static department: string;
    private _publisher;
    constructor(title: string, year: number);
    printItem(): void;
    get publisher(): string;
    set publisher(newPublisher: string);
    abstract printCitation(): void;
}
declare class Encyclopedia extends ReferenceItem {
    edition: number;
    constructor(title: string, year: number, edition: number);
    printItem(): void;
    printCitation(): void;
}
declare const refBook: Encyclopedia;
