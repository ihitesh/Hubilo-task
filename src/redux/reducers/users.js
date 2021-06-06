import { UserActionTypes } from "../actionCreators";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SAVE:
      const { users } = action.payload;
      return [...users];

    default:
      return state;
  }
};

export default usersReducer;
