// src/pages/LoginPage.tsx
import React, { useState, FormEvent } from 'react';
import AuthForm from '../components/AuthForm';
import api from '../services/api';
import NavBar from '../components/Navbar/Navbar';

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', formData);
            localStorage.setItem('token', response.data.token);
            // Redirecionar para a dashboard ou outra página
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>            
            <h2>Login</h2>
            <AuthForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} isLogin />
        </div>
    );
};

export default LoginPage;
