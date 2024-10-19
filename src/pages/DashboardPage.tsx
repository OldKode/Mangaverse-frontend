// src/pages/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';

interface User {
    username: string;
    email: string;
}

const DashboardPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/user', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, []);

    return (
        <div>            
            <h2>Dashboard</h2>
            {user ? (
                <div>
                    <p>Welcome, {user.username}!</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DashboardPage;
