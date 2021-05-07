import { auth } from "../../api"
import { BaseThunkType, InferActionsTypes } from "../redux-store"


const initialState = {
    userId: null as number | null,
    firstName: null as string | null,
    secondName: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    isLoading: false as boolean,
    error: null as string | null
}


const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET_STATUS_LOADING":
        case "SET_USER_DATA": return { ...state, ...action.payload }
        // case "SET_STATUS_LOADING": { return { ...state, ...action.payload } }
        default:
            return state
    }
}
const actions = {
    setAuthUserData: (userId: number, firstName: string, secondName: string, email: string, isAuth: boolean) => ({ type: "SET_USER_DATA", payload: { userId, firstName, secondName, email, isAuth } } as const),
    setStatusLoading: (isLoading: boolean) => ({ type: "SET_STATUS_LOADING", payload: { isLoading } } as const),
    setError: (error: string) => ({ type: 'SET_ERROR', payload: { error } } as const)
}

export const registrationThunk = (firstName: string, secondName: string, email: string, password: string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setStatusLoading(true))
        const registrationData = await auth.registration(firstName, secondName, email, password)
        const token = registrationData.data
        window.localStorage.setItem('token', token)
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(actions.setStatusLoading(false))
    }
}
export const loginThunk = (email: string, password: string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setStatusLoading(true))
        const loginData = await auth.login(email, password)
        const token = loginData.data
        window.localStorage.setItem('token', token)
        const { firstName, secondName, userId, } = loginData.dataUser
        dispatch(actions.setAuthUserData(firstName, secondName, loginData.dataUser.email, userId, true))
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(actions.setStatusLoading(false))
    }



}


export default authReducer

type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>