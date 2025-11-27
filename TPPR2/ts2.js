// ========== 2.1. Інтерфейси для об'єктів ==========
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 2. Функція getAllWorkers() з типом повертаємого значення
function getAllWorkers() {
    var workers = [
        { id: 1, name: "John", surname: "Doe", available: true, salary: 5000 },
        { id: 2, name: "Jane", surname: "Smith", available: false, salary: 6000 },
        { id: 3, name: "Bob", surname: "Johnson", available: true, salary: 5500 }
    ];
    return workers;
}
// Видалення id в робітниках для демонстрації помилки
// const workersWithoutId: IWorker[] = getAllWorkers().map(({ id, ...rest }) => rest);
// ^ Помилка: Property 'id' is missing in type
// 3. Функція getWorkerByID()
function getWorkerByID(id) {
    var workers = getAllWorkers();
    return workers.find(function (w) { return w.id === id; });
}
// 4. Функція PrintWorker()
function PrintWorker(worker) {
    console.log("".concat(worker.name, " ").concat(worker.surname, " got salary ").concat(worker.salary));
}
// Тестування функцій 2.1
console.log("=== 2.1 Інтерфейси для об'єктів ===");
var allWorkers = getAllWorkers();
console.log("All workers:", allWorkers);
var worker1 = getWorkerByID(1);
if (worker1) {
    PrintWorker(worker1);
}
var notFoundWorker = getWorkerByID(999);
console.log("Worker not found:", notFoundWorker);
// 2. Worker вже оновлений вище (додано поле markPrize: PrizeLogger)
// 3. Визначення змінної logPrize та функції
var logPrize = function (reason) {
    console.log("Prize awarded for: ".concat(reason));
};
// Виклик функції
logPrize("Excellent work");
// Тестування з worker об'єктом
console.log("\n=== 2.2 Інтерфейси для типів функцій ===");
var workerWithPrize = {
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
var favoriteAuthor = {
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
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log("".concat(this.name, " is assisting ").concat(custName));
    };
    return UniversityLibrarian;
}());
// 3. Змінна favoriteLibrarian ініціалізована об'єктом класу UniversityLibrarian
var favoriteLibrarian = new UniversityLibrarian("Maria", "maria@library.com", "Children's");
favoriteLibrarian.name = "Maria";
favoriteLibrarian.assistCustomer("John");
console.log("\n=== 2.4 Інтерфейси для типів класів ===");
console.log("Favorite Librarian:", favoriteLibrarian);
// ========== 2.5. Створення та використання класів ==========
// ========== 2.5. Створення та використання класів ==========
// ========== 2.6. Розширення класів ==========
// ========== 2.7. Створення абстрактних класів ==========
// 1. Абстрактний клас ReferenceItem
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        this._publisher = "";
        console.log("Creating a new ReferenceItem ...");
    }
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, ". Department: ").concat(ReferenceItem.department));
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.department = "Library Reference";
    return ReferenceItem;
}());
// Закоментована змінна ref (не можна створювати екземпляри абстрактного класу)
// const ref = new ReferenceItem("TypeScript Guide", 2023);
// ref.printItem();
// ref.publisher = "oxford press";
// console.log("Publisher:", ref.publisher);
// Клас Encyclopedia як нащадок ReferenceItem
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    // Перевизначення методу printItem()
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: ".concat(this.edition, " (").concat(this.year, ")"));
    };
    // Реалізація абстрактного методу printCitation()
    Encyclopedia.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return Encyclopedia;
}(ReferenceItem));
// Оголошення змінної refBook
var refBook = new Encyclopedia("Encyclopedia Britannica", 2020, 32);
console.log("\n=== 2.5, 2.6, 2.7 Класи та абстрактні класи ===");
refBook.printItem();
refBook.printCitation();
