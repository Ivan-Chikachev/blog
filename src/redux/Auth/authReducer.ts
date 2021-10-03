import {ActionsAuthType} from "../../types/types";

const initialState = {

};

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionsAuthType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}