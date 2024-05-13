import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { apiClient } from './ApiClient';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [usernamefromLogin, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  // function login(username, password) {
  //   if (username === 'hasith' && password === '11223344') {
  //     console.log('Successfull login');
  //     setAuthenticated(true);
  //     setUsername(username);
  //     return true;
  //   } else {
  //     setAuthenticated(false);
  //     setUsername(null);
  //     return false;
  //   }
  // }

  async function register(username, password) {
    let userDto = {
      username: username,
      password: password,
    };

    try {
      const registerResponse = apiClient.post('/registration', userDto);
      if ((await registerResponse).status == 201) {
        console.log('201');
        return true;
      } else {
        return false;
      }
    } catch (error) {}
  }

  async function login(username, password) {
    const baToken = 'Basic ' + window.btoa(username + ':' + password);

    try {
      const response = await apiClient.get(`/basicAuth`, {
        headers: {
          Authorization: baToken,
        },
      });

      console.log(response.status);
      if (response.status == 200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(baToken);

        apiClient.interceptors.request.use((config) => {
          console.log('intercepting and adding a token');
          config.headers.Authorization = baToken;
          return config;
        });
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, usernamefromLogin, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
