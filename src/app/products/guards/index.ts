
import { PizzaExistsGuards } from './pizza-exists.guard';
import { PizzasGuard } from './pizzas.guards';
import { ToppingsGuard } from './toppings.guard';

export const guards: any[] = [PizzasGuard, PizzaExistsGuards, ToppingsGuard];

export * from './pizza-exists.guard';
export * from './pizzas.guards';
export * from './toppings.guard';

