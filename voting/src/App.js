import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./front-end/components/navbar";
import Footer from "./front-end/components/footer";
import Home from "./front-end/components/home";
import Inscription from "./front-end/components/inscription";
import Connexion from "./front-end/components/connexion";
import Contact from "./front-end/components/contact";

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
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
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
