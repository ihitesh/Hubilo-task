import { TodoActionTypes } from "../actionCreators";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionTypes.SAVE:
      const { todos } = action.payload;
      return [...todos];

    default:
      return state;
  }
};

export default todosReducer;
