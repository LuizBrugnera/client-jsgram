import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    
  }, [user]);

  const login = (token, userData) => {
    console.log(isAuthenticated);
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    setUser(userData);
    console.log(isAuthenticated);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    console.log(isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};