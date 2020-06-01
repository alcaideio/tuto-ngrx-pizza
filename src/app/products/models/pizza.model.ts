import { Topping } from '../models/topping.model';

export interface Pizza {
  id?: number;
  name?: string;
  toppings?: Topping[];
}

export function generateMockPizza(): Pizza {
  return {
    id: 1,
    name: 'Pizza title',
    toppings: [
      { id: 1, name: 'topping1' },
      { id: 2, name: 'topping2' },
      { id: 3, name: 'topping3' },
    ],
  }
}