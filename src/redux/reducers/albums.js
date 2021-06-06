import { AlbumActionTypes } from "../actionCreators";

const initialState = [];

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AlbumActionTypes.SAVE:
      const { albums } = action.payload;
      return [...albums];

    default:
      return state;
  }
};

export default albumsReducer;
