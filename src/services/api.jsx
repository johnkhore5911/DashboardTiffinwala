import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create an Axios instance
const api = axios.create({
  // baseURL: 'http://192.168.18.235:5173/api',
  // baseURL: 'http://192.168.18.235:5173/api',
  baseURL: 'https://tiffin-wala-backend.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the access token
api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('authToken'); // Use localStorage instead of AsyncStorage
  if (accessToken) {
    config.headers['authorization'] = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Function to handle session expiration
const handleSessionExpired = () => {
  localStorage.removeItem('accessToken'); // Clear token
  window.alert("Session Expired. Please log in again.");
  window.location.href = "/login"; // Redirect to login page
};

// Add a response interceptor to handle 401 or 403 errors (invalid token)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      handleSessionExpired();
    }
    return Promise.reject(error);
  }
);

export default api;
