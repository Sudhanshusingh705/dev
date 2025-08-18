import { createSlice } from '@reduxjs/toolkit';
import { loginAdmin, registerAdmin, getAdminProfile } from '../services/adminService';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        await AsyncStorage.setItem('authToken', data.token);
        await AsyncStorage.setItem('userRole', 'Admin');
        dispatch(setAdminInfo(data));
    } catch (error) {
        console.error('Login error:', error);
    }
};

export const logout = () => async (dispatch) => {
    try {
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('userRole');
        dispatch(clearAdminInfo());
    } catch (error) {
        console.error('Logout error:', error);
    }
};

export default adminSlice.reducer;
