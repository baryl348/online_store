import { auth } from "../../api"
import { BaseThunkType, InferActionsTypes } from "../redux-store"



const initialState = {
    userId: null as number | null,
    firstName: null as string | null,
    secondName: null as string | null,
    email: null as string | null,
    role: null as string | null,
    isAuth: true as boolean,
    isLoading: false as boolean,
    error: null as string | null
}


const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "IS_AUTH":
        case "SET_STATUS_LOADING":
        case "SET_USER_DATA": return { ...state, ...action.payload }
        // case "SET_STATUS_LOADING": { return { ...state, ...action.payload } }
        default:
            return state
    }
}
const actions = {
    setAuthUserData: (userId: number, firstName: string, secondName: string, email: string, role: string, isAuth: boolean) => ({ type: "SET_USER_DATA", payload: { userId, firstName, secondName, email, role, isAuth } } as const),
    setStatusLoading: (isLoading: boolean) => ({ type: "SET_STATUS_LOADING", payload: { isLoading } } as const),
    setError: (error: string) => ({ type: 'SET_ERROR', payload: { error } } as const),
    isAuth: (isAuth: boolean) => ({ type: 'IS_AUTH', payload: { isAuth } } as const)
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
        const { userId, firstName, secondName, role } = loginData.dataUser
        dispatch(actions.setAuthUserData(userId, firstName, secondName, loginData.dataUser.email, role, true))
        console.log(dispatch(actions.setAuthUserData(userId, firstName, secondName, loginData.dataUser.email, role, true)))
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(actions.setStatusLoading(false))
    }
}
// userId: number, firstName: string, secondName: string, email: string, role: string

export const checkUser = (): ThunkType => async (dispatch, getState) => {
    const { userId, firstName, secondName, email, role } = getState().auth
    try {
        await auth.checkUser(userId, firstName, secondName, email, role)
        dispatch(actions.isAuth(true))
    } catch (error) {
        console.log(error)
    }
}


export default authReducer

type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>