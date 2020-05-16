import {firstStateType} from "./types";

const initialState: firstStateType = {
    param: ''
}

export const reducer = (state: firstStateType = initialState, action: any) => {
    return {...state, ...action.payload}
}
