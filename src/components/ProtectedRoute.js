import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Navigate } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken');
                setIsAuthenticated(!!token);
            } catch (error) {
                console.error('Error checking authentication:', error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };
        
        checkAuth();
    }, []);
    
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0066cc" />
            </View>
        );
    }
    
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
