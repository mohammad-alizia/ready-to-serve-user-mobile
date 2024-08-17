import { combineReducers } from "redux";
import appBehaviourSlice from "./app-behaviour/app-behaviour";
import { slicesName } from "./slicesNames";

export default combineReducers({
    [slicesName.APP_BEHAVIOUR]: appBehaviourSlice,
})