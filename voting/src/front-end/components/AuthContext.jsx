import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    const userId = 1; // Remplacez 1 par l'ID de l'utilisateur connecté
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
    if (token) {
      setIsLoggedIn(true);
      fetchUser(); // Appeler la fonction pour récupérer les informations de l'utilisateur au chargement de la page
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
    fetchUser(); // Appeler la fonction pour récupérer les informations de l'utilisateur lors de la connexion
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setUser(null); // Effacer les informations de l'utilisateur lors de la déconnexion
  };

  // Exporter fetchUser également pour qu'il soit accessible dans d'autres composants
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
