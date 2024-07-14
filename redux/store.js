
import { createStore } from 'redux';

const initialState = { leads: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return { ...state, leads: [...state.leads, action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
