// src/components/AuthForm.tsx
import React, { ChangeEvent, FormEvent } from 'react';

interface AuthFormProps {
    handleSubmit: (e: FormEvent) => void;
    formData: { username?: string; email: string; password: string };
    setFormData: React.Dispatch<React.SetStateAction<{ username?: string; email: string; password: string }>>;
    isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ handleSubmit, formData, setFormData, isLogin }) => {
    return (
        <form onSubmit={handleSubmit}>
            {!isLogin && (
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, username: e.target.value })
                    }
                />
            )}
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, password: e.target.value })
                }
            />
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
    );
};

export default AuthForm;
