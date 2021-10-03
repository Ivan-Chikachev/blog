import {ThunkAuthType} from "../../types/types";
import blogAPI from "../../api/api";

export const authActions = {
    // signUp: (username: string, email: string, password: string) => ({
    //     type: "SIGN_UP"
    // } as const)
}

export const signUp = (username: string, email: string, password: string): ThunkAuthType => {
    return async (dispatch) => {
        try {
            const response = await blogAPI.reg(username, email, password)
            console.log(response)
            const user = response.data.user
        } catch (e) {
        }
    }
}

export const signIn = (email: string, password: string): ThunkAuthType => {
    return async (dispatch) => {
        try {
            const response = await blogAPI.auth(email, password)
            console.log(response)
            const user = response.data.user
        } catch (e) {
        }
    }
}
