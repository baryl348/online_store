import { devices } from "../../api"
import { BaseThunkType, InferActionsTypes } from "../redux-store"



export interface TypedeviceType {
    id: number
    name: string
}
export interface BrandsType {
    id: number
    name: string
}
export interface DeviceType {
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
    typeDevice: [] as Array<TypedeviceType>,
    brands: [] as Array<BrandsType>,
    device: [{ id: 1, name: 'Samsung A51', price: 13000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/ru-galaxy-a51-a515-sm-a515fzbcser-back-277128193?$720_576_PNG$' },
    { id: 2, name: 'Samsung A52', price: 9000, rating: 4.5, img: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2021/03/02/04/4539345/ac1aefc34109da5d06d0a5575f27607c733edd7c.jpg' },
    { id: 3, name: 'iphone 10 Pro', price: 32000, rating: 3.2, img: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/B1/D9/rBVaVF2BpC2ADie7AAIMhtA-Bu0142.jpg/for-new-iphone-11-11r-11max-note-10-pro-transparent.jpg' },
    { id: 4, name: 'iphone 12 Pro Max', price: 180000, rating: 1.4, img: 'https://cdn.svyaznoy.ru/upload/iblock/ca1/ruru_iphone12_q321_purple_pdp-image-1b.jpg/resize/870x725/hq/' },
    { id: 5, name: 'iphone 10 Pro', price: 32000, rating: 3.2, img: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/B1/D9/rBVaVF2BpC2ADie7AAIMhtA-Bu0142.jpg/for-new-iphone-11-11r-11max-note-10-pro-transparent.jpg' },
    { id: 6, name: 'iphone 10 Pro', price: 32000, rating: 3.2, img: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/B1/D9/rBVaVF2BpC2ADie7AAIMhtA-Bu0142.jpg/for-new-iphone-11-11r-11max-note-10-pro-transparent.jpg' },
    { id: 7, name: 'iphone 10 Pro', price: 32000, rating: 3.2, img: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/B1/D9/rBVaVF2BpC2ADie7AAIMhtA-Bu0142.jpg/for-new-iphone-11-11r-11max-note-10-pro-transparent.jpg' },
    { id: 8, name: 'iphone 10 Pro', price: 32000, rating: 3.2, img: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/B1/D9/rBVaVF2BpC2ADie7AAIMhtA-Bu0142.jpg/for-new-iphone-11-11r-11max-note-10-pro-transparent.jpg' },] as Array<DeviceType>,
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
        case "BRANDS":
            return { ...state, brands: [...action.payload] }
        case "TYPE__DEVICE":
            return { ...state, typeDevice: [...action.payload] }

        default:
            return state
    }
}

export const actionsDevice = {
    selectedType: (spisokId: number | null) => ({ type: 'SELECTED_TYPE', spisokId } as const),
    selectedBrand: (brandId: number | null) => ({ type: 'SELECTED_BRAND', brandId } as const),
    getTypeDevice: (arrayTypeDevice: Array<TypedeviceType>) => ({ type: 'TYPE__DEVICE', payload: arrayTypeDevice } as const),
    getBrands: (arrayBrands: Array<BrandsType>) => ({ type: 'BRANDS', payload: arrayBrands } as const)
}

export const getTypeDevice = (): ThunkType => async (dispatch) => {
    try {
        const typeDeviceData = await devices.typeDevice()
        dispatch(actionsDevice.getTypeDevice(typeDeviceData))
    } catch (error) {
        console.log(error)
    }
}

export const getBrands = (): ThunkType => async (dispatch) => {
    try {
        const brandData = await devices.brand()
        dispatch(actionsDevice.getBrands(brandData))
    } catch (error) {
        console.log(error)
    }
}

export default deviceReducer

type ActionTypes = InferActionsTypes<typeof actionsDevice>
export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionTypes>