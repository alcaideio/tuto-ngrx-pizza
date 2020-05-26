import { createAction, props } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export const loadToppings = createAction(
    '[Product] Load Toppings',
);

export const loadToppingsSuccess = createAction(
    '[Product] Load Toppings Success',
    props<{ payload: Topping[] }>()
);

export const loadToppingsFail = createAction(
    '[Product] Load Toppings Fail',
    props<{ payload: any }>()
);