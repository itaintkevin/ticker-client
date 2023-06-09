import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' 
    ?   'https://ticker-server.onrender.com/api/users/'
    :  'http://localhost:5000/api/users/' 

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Login User
const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Logout User
const logout = () => {
    localStorage.removeItem('user');
}

const authService = { 
    register,
    login,
    logout,
}

export default authService;