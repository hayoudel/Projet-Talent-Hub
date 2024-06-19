import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./front-end/components/navbar";
import Footer from "./front-end/components/footer";
import Home from "./front-end/components/home";
import Inscription from "./front-end/components/inscription";
import Connexion from "./front-end/components/connexion";
import Contact from "./front-end/components/contact";
import Profile from "./front-end/components/profile";
import Votecreer from "./front-end/components/votecreer";
import Resultatvote from "./front-end/components/resultatvote";
import Creervote from "./front-end/components/creervote";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />
        <Route
          path="/contact"
          element={(
            <MainLayout>
              <Contact />
            </MainLayout>
          )}
        />
        <Route
          path="/creervote"
          element={(
            <MainLayout>
              <Creervote />
            </MainLayout>
          )}
        />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/votecreer" element={<Votecreer />} />
        <Route path="/resultatvote" element={<Resultatvote />} />
      </Routes>
    </Router>
  );
}

function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default App;
