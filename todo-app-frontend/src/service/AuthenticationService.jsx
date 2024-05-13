import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [usernamefromLogin, setUsername] = useState(null);

  function login(username, password) {
    if (username === 'hasith' && password === '11223344') {
      console.log('Successfull login');
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, usernamefromLogin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
