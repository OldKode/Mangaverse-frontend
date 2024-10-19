// src/redux/actions/authActions.ts
import { AppDispatch } from '../store';
import { loginStart, loginSuccess, loginFailure } from '../reducers/authReducers';
import api from '../../services/api';

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(loginStart());
    try {
        const response = await api.post('/auth/login', { email, password });
        const { user, token } = response.data;
        localStorage.setItem('token', token);
        dispatch(loginSuccess({ user, token }));
    } catch (error: any) {
        // Verificação e tratamento seguro do erro
        const errorMessage = error.response?.data?.message || error.message || 'Login failed';
        dispatch(loginFailure(errorMessage));
    }
};

export const logout = () => (dispatch: AppDispatch) => {
    localStorage.removeItem('token');
    dispatch(logout());
};
