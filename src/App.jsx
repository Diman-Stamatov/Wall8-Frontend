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
import InfoPage from "./pages/About";
import ConfirmTransferScreen from "./pages/ConfirmTransferScreen";

// TODO: error pages for 404, 401, 500, etc.

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
            <Route path="/info" element={<InfoPage />} />
            <Route
              path="/confirmed-transfer"
              element={<ConfirmTransferScreen />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
