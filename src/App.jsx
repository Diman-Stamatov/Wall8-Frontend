import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreditCardAdd from "./components/CreditCardAdd";
import Profile from "./pages/Profile";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { AuthProvider } from "./context/AuthContext";
import ThemeProvider from "./ThemeProvider";
import TransferPage from "./pages/TransferPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/credit-card-add" element={<CreditCardAdd />} />
            <Route path="/transfer" element={<TransferPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
