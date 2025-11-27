import { Worker, Category } from './types';

export const workersData: Worker[] = [
  { id: 1, name: 'Danylo', surname: 'Romanovych', available: false, salary: 1000, category: Category.BusinessAnalyst },
  { id: 2, name: 'Pavlo', surname: 'Skoropadskyi', available: true, salary: 1500, category: Category.Developer },
  { id: 3, name: 'Mykola', surname: 'Mikhnovskyi', available: false, salary: 1600, category: Category.Designer },
  { id: 4, name: 'Yarema', surname: 'Vyshnevetskyi', available: true, salary: 1300, category: Category.Developer }
];

export function getAllWorkers(): Worker[] {
  // return shallow copies to avoid accidental mutation of module data
  return workersData.map(w => ({ ...w }));
}
