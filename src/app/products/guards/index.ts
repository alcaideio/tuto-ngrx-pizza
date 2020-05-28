
import { PizzaExistsGuards } from './pizza-exists.guard';
import { PizzasGuard } from './pizzas.guards';

export const guards: any[] = [PizzasGuard, PizzaExistsGuards];

export * from './pizza-exists.guard';
export * from './pizzas.guards';

