// src/pages/TestTokenPage.tsx
import React, { useState } from 'react';
import api from '../services/api';

interface User {
    username: string;
    email: string;
}

const TestTokenPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const handleTest = async () => {
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

    return (
        <div>
            <h2>Test Token</h2>
            <button onClick={handleTest}>Test Token</button>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default TestTokenPage;
