import { createStore } from "redux";
import getContinents from "./reducer";

const store = createStore(
    getContinents,
    );

export default store;