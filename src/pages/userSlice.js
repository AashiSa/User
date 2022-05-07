import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: "",
}

const userListSlice = createSlice({
    name: "UserListing",
    initialState,
    reducers:{
        fetchUserLoading: (state) => {
            state.isLoading = true;
        },
        fetchUserSucces: (state,action) => {
            state.users =  action.payload;
            state.isLoading = false;
        },
        fetchUserFail: (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        }
    }
})