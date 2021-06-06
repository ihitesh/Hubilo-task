import { PostActionTypes } from "../actionCreators";

const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostActionTypes.SAVE:
      const { posts } = action.payload;
      return [...posts];

    case PostActionTypes.ADD:
      const { post } = action.payload;

      return [...post, ...state];

    default:
      return state;
  }
};

export default postsReducer;
