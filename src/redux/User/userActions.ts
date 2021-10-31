import {ThunkAppType, ThunkUserType, UpdateUserType} from "../../types/types";
import blogAPI from "../../services/api";
import {appActions} from "../App/appActions";

export const userActions = {
    fetchingOff: () => ({type: "FETCHING_OFF"} as const),
    fetchingOn: () => ({type: "FETCHING_ON"} as const),
}

export const updateUser = (user: UpdateUserType): ThunkAppType => {
    console.log(user)
    return async (dispatch) => {
        dispatch(userActions.fetchingOn())
        try {
            const res = await blogAPI.updateUser(user)
            if (res.status === 200) {
                dispatch(appActions.showAlert({
                    msg: 'Данные успешно обновлены', type: 'success'
                }))
            }

        } catch (e: any) {
            console.log(e)
            dispatch(appActions.showAlert({
                msg: 'Ошибка', type: 'success'
            }))
        }
        dispatch(userActions.fetchingOff())
    }
}