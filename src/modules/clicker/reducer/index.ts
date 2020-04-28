import { ADD_ONE_TO_COUNTER } from '../actions';
import { IClickerState } from '~/modules/clicker/interfaces';

const initialState: IClickerState = {
  count: 0,
};

const clickerReducer = (state: IClickerState = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case ADD_ONE_TO_COUNTER:
      const { count } = state;
      return {
        ...state,
        count: count + 1,
      };
    default:
      return state;
  }
};

export default clickerReducer;
