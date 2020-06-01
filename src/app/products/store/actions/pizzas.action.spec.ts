import { generateMockPizza } from '../../models/pizza.model';
import * as fromPizzas from './pizzas.actions';

describe('Pizzas Actions', () => {
    const pizza1 = generateMockPizza()
    const pizza2 = { ...pizza1, id: 2}
  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const action = new fromPizzas.LoadPizzas();
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS,
        });
      });
    });

    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromPizzas.LoadPizzasFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          payload,
        });
      });
    });

    describe('LoadPizzasSuccess', () => {
      it('should create an action', () => {
        const payload = [ pizza1, pizza2 ]
        const action = new fromPizzas.LoadPizzasSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('CreatePizza Actions', () => {
    describe('CreatePizza', () => {
      it('should create an action', () => {
        const payload = pizza2
        const action = new fromPizzas.CreatePizza(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA,
          payload,
        });
      });
    });

    describe('CreatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Create Error' };
        const action = new fromPizzas.CreatePizzaFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('CreatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = pizza2
        const action = new fromPizzas.CreatePizzaSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('UpdatePizza Actions', () => {
    describe('UpdatePizza', () => {
      it('should create an action', () => {
        const payload = pizza2
        const action = new fromPizzas.UpdatePizza(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA,
          payload,
        });
      });
    });

    describe('UpdatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Update Error' };
        const action = new fromPizzas.UpdatePizzaFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('UpdatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = pizza2
        const action = new fromPizzas.UpdatePizzaSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('DeletePizza Actions', () => {
    describe('DeletePizza', () => {
      it('should create an action', () => {
        const payload = pizza2
        const action = new fromPizzas.DeletePizza(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA,
          payload,
        });
      });
    });

    describe('DeletePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Delete Error' };
        const action = new fromPizzas.DeletePizzaFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('DeletePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = pizza2
        const action = new fromPizzas.DeletePizzaSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });
});