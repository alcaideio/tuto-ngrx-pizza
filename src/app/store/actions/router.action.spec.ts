import * as fromRouter from './router.action';

describe('Router Actions', () => {
  describe('Go', () => {
    it('should create an action', () => {
      const payload = {
        path: ['/product'],
        query: { pizzaId: '2' },
        extras: { queryParams: { page: 1 } },
      };
      const action = new fromRouter.Go(payload);
      expect({ ...action }).toEqual({
        type: fromRouter.GO,
        payload,
      });
    });
  });

  describe('Back', () => {
    it('should create an action', () => {
      const action = new fromRouter.Back();
      expect({ ...action }).toEqual({
        type: fromRouter.BACK,
      });
    });
  });

  describe('Forward', () => {
    it('should create an action', () => {
      const action = new fromRouter.Forward();
      expect({ ...action }).toEqual({
        type: fromRouter.FORWARD,
      });
    });
  });
});
