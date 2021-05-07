import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import authReducer from "./reducers/auth-reducer";
import deviceReducer from "./reducers/device-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    device: deviceReducer
})



const store = createStore(rootReducer, applyMiddleware(thunk))
export default store

export type InferActionsTypes<T> = T extends {
    [keys: string]: (...args: any[]) => infer U;
}
    ? U
    : never;
export type BaseThunkType<
    A extends Action = Action,
    R = Promise<void>
    > = ThunkAction<R, AppState, unknown, A>;
type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>