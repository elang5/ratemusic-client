import { createStore } from "redux";
import { albumsReducer } from "./reducers";

export default createStore(albumsReducer);
