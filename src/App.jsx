import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

/// components

import Menu from "./components/screens/Menu";
import Login from "./components/screens/Login";
import Singup from "./components/screens/Signup";
import Home from "./components/screens/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/screens/Profile";
import Feed from "./components/screens/Feed";
import { AuthProvider } from "./AuthContext";

function App() {

  return (
    <AuthProvider>
      <Menu/>
      <Router>
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/login" element={<Login/>} />
          <Route exact="true" path="/signup" element={<Singup />} />
          <Route exact="true" path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route exact="true" path="/feed" element={<ProtectedRoute><Feed/></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
