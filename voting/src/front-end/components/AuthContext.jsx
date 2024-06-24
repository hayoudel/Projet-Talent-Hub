import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = (userId) => {
    fetch(`http://localhost:5000/api/user?userId=${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => {
        setUser(data); // Mettre à jour l'état avec les données de l'utilisateur
      })
      .catch(error => {
        console.error('Error fetching user data:', error.message);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId'); // Récupérer l'ID utilisateur depuis le localStorage
    if (token && userId) {
      setIsLoggedIn(true);
      fetchUser(userId); // Appeler la fonction pour récupérer les informations de l'utilisateur au chargement de la page
    }
  }, []);

  const login = (token, userId) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
    setIsLoggedIn(true);
    fetchUser(userId); // Appeler la fonction pour récupérer les informations de l'utilisateur lors de la connexion
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setUser(null); // Effacer les informations de l'utilisateur lors de la déconnexion
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
