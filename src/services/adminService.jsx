import API from '../api/axios';

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
export const logoutAdmin = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
};
