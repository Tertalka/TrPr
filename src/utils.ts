import { Worker, Category } from './types';
import { getAllWorkers } from './data';
import { isValidWorker } from './validators';

export function logFirstAvailable(workers: Worker[] = getAllWorkers()): void {
  const validWorkers = workers.filter(isValidWorker);
  console.log(`Number of workers: ${validWorkers.length}`);
  const firstAvailable = validWorkers.find(w => w.available);
  if (firstAvailable) {
    console.log(`First available: ${firstAvailable.name} ${firstAvailable.surname}`);
  }

  console.log('All workers:');
  for (const w of validWorkers) {
    console.log(`- ${w.name} ${w.surname}`);
  }
}

export function getWorkersSurnamesByCategory(category: Category = Category.Designer): string[] {
  return getAllWorkers().filter(isValidWorker).filter(w => w.category === category).map(w => w.surname);
}

export function logWorkersNames(names: string[]): void {
  names.forEach(n => console.log(n));
}

export const getWorkerByID = (id: number): Worker | undefined => {
  const w = getAllWorkers().find(worker => worker.id === id);
  return w && isValidWorker(w) ? w : undefined;
};

export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

export let idGenerator: (name: string, id: number) => string = (name, id) => `${name}${id}`;

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);
  if (typeof age === 'number') console.log(`Age: ${age}`);
  if (typeof city === 'string') console.log(`City: ${city}`);
}

export function checkoutWorkers(customer: string, ...workerIDs: number[]): string[] {
  console.log(`Customer: ${customer}`);
  return workerIDs
    .map(id => getWorkerByID(id))
    .filter((w): w is Worker => !!w && w.available)
    .map(w => `${w.name} ${w.surname}`);
}
