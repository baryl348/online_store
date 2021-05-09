import { InferActionsTypes } from "../redux-store"



export interface TypedeviceType {
    id: number
    name: string
}
export interface BrandsType {
    id: number
    name: string
}
interface DeviceType {
    id: number
    name: string
    price: number
    rating: number
    img: string
}
export interface selectedType {
    id: number | null
}

const initialState = {
    typeDevice: [{ id: 1, name: 'Холодильники' },
    { id: 2, name: 'Смартфоны' }, { id: 3, name: 'Ноутбуки' }, { id: 4, name: 'Телевизоры' }] as Array<TypedeviceType>,
    brands: [{ id: 1, name: 'Samsung' },
    { id: 2, name: 'Apple' }] as Array<BrandsType>,
    device: [{ id: 1, name: 'Samsung A51', price: 13000, rating: 5, img: 'https://clck.ru/UgsYh' },
    { id: 2, name: 'Samsung A52', price: 9000, rating: 4.5, img: 'https://clck.ru/Ugsdr' },
    { id: 3, name: 'iphone 10 Pro', price: 32000, rating: 3.2, img: 'https://clck.ru/UgsjN' },
    { id: 4, name: 'iphone 12 Pro Max', price: 180000, rating: 1.4, img: 'https://clck.ru/UgspV' }] as Array<DeviceType>,
    selectedType: {} as selectedType,
    selectedBrand: {} as selectedType
}


const deviceReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SELECTED_TYPE":
            return {
                ...state, selectedType: { ...state.selectedType, id: action.spisokId }
            }
        case "SELECTED_BRAND":
            return {
                ...state, selectedBrand: { ...state.selectedBrand, id: action.brandId }
            }

        default:
            return state
    }
}

export const actionsDevice = {
    selectedType: (spisokId: number | null) => ({ type: 'SELECTED_TYPE', spisokId } as const),
    selectedBrand: (brandId: number | null) => ({ type: 'SELECTED_BRAND', brandId } as const)
}

export default deviceReducer

type ActionTypes = InferActionsTypes<typeof actionsDevice>
export type InitialStateType = typeof initialState