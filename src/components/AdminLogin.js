import React, { useState } from 'react';
import { loginAdmin } from '../services/adminService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginAdmin(formData);
            await AsyncStorage.setItem('authToken', data.token);
            await AsyncStorage.setItem('userRole', 'Admin');
            await AsyncStorage.setItem('userName', data.name || 'Admin');
            alert(`Welcome, ${data.name || 'Admin'}`);
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed: ' + (error.message || 'Unknown error'));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default AdminLogin;
