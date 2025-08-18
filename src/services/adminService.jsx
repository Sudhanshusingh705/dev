import API from '../api/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Register Admin
export const registerAdmin = async (adminData) => {
    const { data } = await API.post('/admins/register', adminData);
    return data;
};

// Login Admin
export const loginAdmin = async (adminData) => {
    const { data } = await API.post('/admins/login', adminData);
    return data;
};

// Get Admin Profile
export const getAdminProfile = async () => {
    const { data } = await API.get('/admins/profile');
    return data;
};

// Logout Admin (Frontend only)
export const logoutAdmin = async (navigation) => {
    try {
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('userRole');
        await AsyncStorage.removeItem('userName');
        
        // If navigation is provided, use it to navigate to login screen
        if (navigation) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'LoginSignup', params: { source: 'logout' } }],
            });
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
};
