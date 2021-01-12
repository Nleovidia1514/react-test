import * as actions from './actions';

export const initialState = {
  currentFact: null,
  loading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_FACT:
      return {
        ...state,
        loading: true,
        currentFact: null,
      };
    case actions.FETCH_FACT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentFact: action.payload,
      };
    default:
      return state;
  }
};
