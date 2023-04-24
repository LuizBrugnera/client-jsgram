import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/// components

import Menu from "./components/screens/Menu";
import Login from "./components/screens/Login";
import Singup from "./components/screens/Signup";
import Home from "./components/screens/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/screens/Profile";
import Feed from "./components/screens/Feed";
import User from "./components/user/User"
import { AuthProvider } from "./components/AuthContext";

function App() {

  return (
    <AuthProvider>
      <Router>
      <Menu/>
      <User/>
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/login" element={<User screen="login"/>} />
          <Route exact="true" path="/signup" element={<User screen="signup"/>} />
          <Route exact="true" path="/profile" element={<ProtectedRoute><User screen="profile"/></ProtectedRoute>} />
          <Route exact="true" path="/feed" element={<Feed/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
