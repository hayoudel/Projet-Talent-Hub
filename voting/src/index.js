// Importez React et la méthode createRoot de react-dom/client
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Importez votre composant principal App

// Sélectionnez l'élément HTML où vous voulez monter votre application React
const container = document.getElementById('root');

// Créez une racine avec createRoot
const root = createRoot(container);

// Rendre (mount) votre application React à cette racine
root.render(<App />);
