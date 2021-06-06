import { createStore, combineReducers } from "redux";
import { posts, albums, users, todos } from "../reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({ posts, albums, users, todos });

const store = createStore(reducers, composeWithDevTools());

export default store;
