import { sections } from './utilsShop';

const initialState = {
  sections: sections,
};

export const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
