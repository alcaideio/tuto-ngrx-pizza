import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducers';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

////// utils

export function createEntities<S, T>(state: S, list: Array<T>) {
    return list.reduce(
        (entities: { [id: number]: T }, item: any) => {
            return {
                ...entities,
                [item.id]: item,
            }
        },
        {
            ...state.entities,
        }
    );
}