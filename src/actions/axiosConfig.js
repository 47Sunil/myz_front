import axios from 'axios';
import { APP_ENVIRONMENT } from '../App';
let baseURL;
if (APP_ENVIRONMENT === 'local') {
  baseURL = 'http://localhost:3000/api/v1/';
}

export const requestInstance = axios.create({
  // baseURL: 'http://localhost:3000/api/v1/',
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const reqInstanceImage = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
// Error handling interceptor
requestInstance.interceptors.response.use(
  (response) => {
    // Successful response (status 2xx)
    return response.data;
  },
  (error) => {
    // Error response (status 4xx or 5xx)
    if (error.response) {
      const { status, data } = error.response;

      // Client-side errors (4xx)
      if (status >= 400 && status < 500) {
        console.log('Client error:', data.message);
        // You can perform actions like displaying an error message to the user
      }

      // Server-side errors (5xx)
      if (status >= 500 && status < 600) {
        console.log('Server error:', data.message);
        // You can handle server errors differently, e.g., retry the request
      }
    } else if (error.request) {
      // No response received (e.g., network error)
      console.log('No response:', error.request);
      // You can handle this scenario, e.g., show a network error message
    } else {
      // Other errors
      console.log('Error:', error.message);
      // You can handle other types of errors, e.g., show a generic error message
    }

    // Reject the promise so that the caller can handle the error further
    return Promise.reject(error);
  }
);
reqInstanceImage.interceptors.response.use(
  (response) => {
    // Successful response (status 2xx)
    return response.data;
  },
  (error) => {
    // Error response (status 4xx or 5xx)
    if (error.response) {
      const { status, data } = error.response;

      // Client-side errors (4xx)
      if (status >= 400 && status < 500) {
        console.log('Client error:', data.message);
        // You can perform actions like displaying an error message to the user
      }

      // Server-side errors (5xx)
      if (status >= 500 && status < 600) {
        console.log('Server error:', data.message);
        // You can handle server errors differently, e.g., retry the request
      }
    } else if (error.request) {
      // No response received (e.g., network error)
      console.log('No response:', error.request);
      // You can handle this scenario, e.g., show a network error message
    } else {
      // Other errors
      console.log('Error:', error.message);
      // You can handle other types of errors, e.g., show a generic error message
    }

    // Reject the promise so that the caller can handle the error further
    return Promise.reject(error);
  }
);
