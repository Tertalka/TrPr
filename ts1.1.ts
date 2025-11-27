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
/* Git — приклади команд для термінала (у корені репозиторію)

# Налаштування (приперше)
git config --global user.name "Ваше Ім'я"
git config --global user.email "email@example.com"

# Клонування віддаленого репозиторію
git clone https://github.com/користувач/репозиторій.git

# Ініціалізація нового локального репозиторію
git init

# Перевірити статус змін
git status

# Додати файли до індексу (staging)
git add file.ts            # або git add . для всіх змін

# Зафіксувати коміт
git commit -m "Повідомлення коміту"

# Відправити на віддалений репозиторій (push)
git push origin main       # або git push origin <branch>

# Отримати зміни з віддаленого (pull)
git pull origin main

# Робота з гілками
git branch                # список гілок
git branch feature-1      # створити гілку
git checkout feature-1    # перейти на гілку
git checkout -b feature-2 # створити і перейти

# Злиття гілки
git checkout main
git merge feature-1

# Повернення змін
git reset --hard HEAD~1   # скасувати останній коміт (обережно)
git revert <commit-hash>  # створити новий коміт, що відміняє

# Інші корисні
git log --oneline
git diff
git stash                 # тимчасово сховати локальні зміни
git fetch                 # отримати оновлення без злиття
*/