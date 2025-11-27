// 1.1. Базові типи

// Інтерфейс для робітників
interface Worker {
  id: number;
  name: string;
  surname: string;
  available: boolean;
  salary: number;
  category: Category;
}

// 1.2. Enum категорій
enum Category {
  BusinessAnalyst,
  Developer,
  Designer,
  QA,
  ScrumMaster
}

// 1.1. Реалізація функції getAllWorkers()
function getAllWorkers(): Worker[] {
  return [
    { id: 1, name: "Danylo", surname: "Romanovych", available: false, salary: 1000, category: Category.BusinessAnalyst },
    { id: 2, name: "Pavlo", surname: "Skoropadskyi", available: true, salary: 1500, category: Category.Developer },
    { id: 3, name: "Mykola", surname: "Mikhnovskyi", available: false, salary: 1600, category: Category.Designer },
    { id: 4, name: "Yarema", surname: "Vyshnevetskyi", available: true, salary: 1300, category: Category.Developer }
  ];
}

// 1.1. Функція logFirstAvailable()
function logFirstAvailable(workers: Worker[] = getAllWorkers()): void {
  console.log(`Number of workers: ${workers.length}`);
  const firstAvailable = workers.find(w => w.available);
  if (firstAvailable) {
    console.log(`First available: ${firstAvailable.name} ${firstAvailable.surname}`);
  }

  console.log("All workers:");
  for (const w of workers) {
    console.log(`- ${w.name} ${w.surname}`);
  }
}

logFirstAvailable();

// 1.2. Функція getWorkersSurnamesByCategory()
function getWorkersSurnamesByCategory(category: Category = Category.Designer): Array<string> {
  const workers = getAllWorkers();
  return workers.filter(w => w.category === category).map(w => w.surname);
}

// 1.2. Функція logWorkersNames()
function logWorkersNames(names: string[]): void {
  names.forEach(n => console.log(n));
}

console.log("Developers:");
logWorkersNames(getWorkersSurnamesByCategory(Category.Developer));

// 1.3. Стрілкові функції
const getWorkerByID = (id: number): Worker | undefined =>
  getAllWorkers().find(w => w.id === id);

console.log(getWorkerByID(2));

// Виведення Developer-ів
getAllWorkers()
  .filter(w => w.category === Category.Developer)
  .forEach(w => console.log(`${w.name} ${w.surname}`));

// 1.4. Типи функцій
function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

let myID: string = createCustomerID("Oleksandr", 3);
console.log(myID);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name, id) => `${name}${id}`;
console.log(idGenerator("Oleksandr", 3));

// 1.5. Необов’язкові та залишкові параметри
function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);
  if (age) console.log(`Age: ${age}`);
  if (city) console.log(`City: ${city}`);
}

createCustomer("Oleksandr");
createCustomer("Oleksandr", 25);
createCustomer("Oleksandr", 25, "Kyiv");

// 1.5. checkoutWorkers()
function checkoutWorkers(customer: string, ...workerIDs: number[]): string[] {
  console.log(`Customer: ${customer}`);
  return workerIDs
    .map(id => getWorkerByID(id))
    .filter(w => w && w.available)
    .map(w => `${w!.name} ${w!.surname}`);
}

const myWorkers = checkoutWorkers("Oleksandr", 1, 2, 3, 4);
myWorkers.forEach(w => console.log(w)); 
