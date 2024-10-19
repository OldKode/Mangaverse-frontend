// src/pages/RegisterPage.tsx
import React, { useState, FormEvent } from 'react';
import AuthForm from '../components/AuthForm';
import api from '../services/api';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', formData);
            // Redirecionar para a página de login ou dashboard
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <AuthForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} isLogin={false} />
        </div>
    );
};

export default RegisterPage;
