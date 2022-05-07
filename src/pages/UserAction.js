import {fetchUserFail,fetchUserLoading,fetchUserSucces} from "../pages/userSlice";

import { getAllUsers } from "../api/userApi";

export const fetchAllUsers = () => async(dispatch) => {
    dispatch(fetchUserLoading());
    try{
        const result = await getAllUsers();
        if(result.data.result.length){
            dispatch(fetchUserSucces());
        }
    }catch(error){
        dispatch(fetchUserFail());
    }
}