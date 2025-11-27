"use strict";
// ========== 2.1. Інтерфейси для об'єктів ==========
// 2. Функція getAllWorkers() з типом повертаємого значення
function getAllWorkers() {
    const workers = [
        { id: 1, name: "John", surname: "Doe", available: true, salary: 5000 },
        { id: 2, name: "Jane", surname: "Smith", available: false, salary: 6000 },
        { id: 3, name: "Bob", surname: "Johnson", available: true, salary: 5500 }
    ];
    return workers;
}
// Видалення id в робітниках для демонстрації помилки
// const workersWithoutId: Worker[] = getAllWorkers().map(({ id, ...rest }) => rest);
// ^ Помилка: Property 'id' is missing in type
// 3. Функція getWorkerByID()
function getWorkerByID(id) {
    const workers = getAllWorkers();
    return workers.find(w => w.id === id);
}
// 4. Функція PrintWorker()
function PrintWorker(worker) {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}
// Тестування функцій 2.1
console.log("=== 2.1 Інтерфейси для об'єктів ===");
const allWorkers = getAllWorkers();
console.log("All workers:", allWorkers);
const worker1 = getWorkerByID(1);
if (worker1) {
    PrintWorker(worker1);
}
const notFoundWorker = getWorkerByID(999);
console.log("Worker not found:", notFoundWorker);
// 2. Worker вже оновлений вище (додано поле markPrize: PrizeLogger)
// 3. Визначення змінної logPrize та функції
const logPrize = (reason) => {
    console.log(`Prize awarded for: ${reason}`);
};
// Виклик функції
logPrize("Excellent work");
// Тестування з worker об'єктом
console.log("\n=== 2.2 Інтерфейси для типів функцій ===");
const workerWithPrize = {
    id: 1,
    name: "Alice",
    surname: "Brown",
    available: true,
    salary: 7000,
    markPrize: logPrize
};
if (workerWithPrize.markPrize) {
    workerWithPrize.markPrize("Team leadership");
}
// 4. Змінна favoriteAuthor
const favoriteAuthor = {
    name: "George Orwell",
    email: "george@example.com",
    numBooksPublished: 15
};
// 5. Змінна favoriteLibrarian (буде переписана в 2.4)
// let favoriteLibrarian: Librarian = {
//   name: "Sarah",
//   email: "sarah@library.com",
//   department: "Reference",
//   assistCustomer: (custName: string) => {
//     console.log(`Sarah is assisting ${custName}`);
//   }
// };
console.log("\n=== 2.3 Розширення інтерфейсів ===");
console.log("Favorite Author:", favoriteAuthor);
// ========== 2.4. Інтерфейси для типів класів ==========
// 1. Клас UniversityLibrarian
class UniversityLibrarian {
    constructor(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
// 3. Змінна favoriteLibrarian ініціалізована об'єктом класу UniversityLibrarian
let favoriteLibrarian = new UniversityLibrarian("Maria", "maria@library.com", "Children's");
favoriteLibrarian.name = "Maria";
favoriteLibrarian.assistCustomer("John");
console.log("\n=== 2.4 Інтерфейси для типів класів ===");
console.log("Favorite Librarian:", favoriteLibrarian);
// ========== 2.5. Створення та використання класів ==========
// ========== 2.5. Створення та використання класів ==========
// ========== 2.6. Розширення класів ==========
// ========== 2.7. Створення абстрактних класів ==========
// 1. Абстрактний клас ReferenceItem
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._publisher = "";
        console.log("Creating a new ReferenceItem ...");
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}. Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
ReferenceItem.department = "Library Reference";
// Закоментована змінна ref (не можна створювати екземпляри абстрактного класу)
// const ref = new ReferenceItem("TypeScript Guide", 2023);
// ref.printItem();
// ref.publisher = "oxford press";
// console.log("Publisher:", ref.publisher);
// Клас Encyclopedia як нащадок ReferenceItem
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
    }
    // Перевизначення методу printItem()
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    // Реалізація абстрактного методу printCitation()
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
// Оголошення змінної refBook
const refBook = new Encyclopedia("Encyclopedia Britannica", 2020, 32);
console.log("\n=== 2.5, 2.6, 2.7 Класи та абстрактні класи ===");
refBook.printItem();
refBook.printCitation();
//# sourceMappingURL=ts2.js.map