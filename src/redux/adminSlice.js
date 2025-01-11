import { createSlice } from '@reduxjs/toolkit';
import { loginAdmin, registerAdmin, getAdminProfile } from '../services/adminService';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        adminInfo: null,
        loading: false,
        error: null,
    },
    reducers: {
        setAdminInfo: (state, action) => {
            state.adminInfo = action.payload;
        },
        clearAdminInfo: (state) => {
            state.adminInfo = null;
        },
    },
});

export const { setAdminInfo, clearAdminInfo } = adminSlice.actions;

export const login = (adminData) => async (dispatch) => {
    try {
        const data = await loginAdmin(adminData);
        localStorage.setItem('token', data.token);
        dispatch(setAdminInfo(data));
    } catch (error) {
        console.error(error);
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(clearAdminInfo());
};

export default adminSlice.reducer;
