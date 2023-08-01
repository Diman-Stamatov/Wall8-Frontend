import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreditCardAdd from "./components/CreditCardAdd";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/credit-card-add" element={<CreditCardAdd />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
