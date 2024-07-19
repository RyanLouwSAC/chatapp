import axios from 'axios';

// Set the base URL for the API
const API_URL = 'http://localhost:5000/api'; // Replace with your actual API base URL

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });

    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error('Login failed', error);
    throw error;
  }
};

export const register = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      password,
    });

    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error('Registration failed', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};
