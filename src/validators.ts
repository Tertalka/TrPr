import { Worker, Category } from './types';

export function isValidCategory(value: any): value is Category {
  // Category is numeric enum; check membership
  return typeof value === 'number' && Object.values(Category).includes(value);
}

export function isValidWorker(obj: any): obj is Worker {
  if (!obj || typeof obj !== 'object') return false;
  return (
    typeof obj.id === 'number' &&
    typeof obj.name === 'string' &&
    typeof obj.surname === 'string' &&
    typeof obj.available === 'boolean' &&
    typeof obj.salary === 'number' &&
    isValidCategory(obj.category)
  );
}
