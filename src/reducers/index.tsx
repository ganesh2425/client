import {combineReducers} from "redux";
import authReducer from "./authReducer";
import roleReducer from "./roleReducer";

// combine all reducers in single reducer function
const rootReducer = combineReducers({
    auth: authReducer,
    role: roleReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;