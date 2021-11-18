import {UpdateUserType} from "../../types/types";
import blogAPI from "../../services/api";
import {AppDispatch} from "../rootReducer";
import {appActions} from "../App/appReducer";

export const updateUser = (user: UpdateUserType) => {
    return async (dispatch: AppDispatch) => {

        dispatch(appActions.FETCHING_ON())
        try {
            const res = await blogAPI.updateUser(user)
            if (res.status === 200) {
                dispatch(appActions.SHOW_ALERT({
                    msg: 'Successfully updated', type: 'success'
                }))
            }

        } catch (e: any) {
            console.log(e)
            dispatch(appActions.SHOW_ALERT({
                msg: 'Error', type: 'error'
            }))
        } finally {
            dispatch(appActions.FETCHING_OFF())
        }
    }
}