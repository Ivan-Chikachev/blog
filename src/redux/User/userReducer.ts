import {ActionsUserType} from "../../types/types";

const initialState = {
    isFetching: false,
};

type InitialStateType = typeof initialState

export const userReducer = (state = initialState, action: ActionsUserType): InitialStateType => {
    switch (action.type) {
        case "FETCHING_OFF":
            return {...state, isFetching: false}
        case "FETCHING_ON":
            return {...state, isFetching: true}
        default:
            return state
    }
}