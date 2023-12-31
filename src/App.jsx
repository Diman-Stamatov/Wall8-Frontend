import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UpdateEmailPage from "./pages/UpdateEmailPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { AuthProvider } from "./context/AuthContext";
import ThemeProvider from "./ThemeProvider";
import TransferPage from "./pages/TransferPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import InfoPage from "./pages/About";
import ConfirmTransferScreen from "./pages/ConfirmTransferScreen";
import { UserProvider } from "./context/UserContext";
import { LoadingProvider } from "./context/LoadingContext";
import { ErrorProvider } from "./context/ErrorContext";
import { TransferProvider } from "./context/TransferContext";
import RegisterCard from "./pages/RegisterCard";
import NextTopLoader from "nextjs-toploader";
import PrivateRoutes from "./utils/PrivateRoutes";
import React from "react";
import { LocaleProvider } from "./context/LocaleContext";
import AdminDashboard from "./pages/AdminDashboard";

// TODO: error pages for 404, 401, 500, etc.

function App() {
  return (
    <ThemeProvider>
      <Router>
        <LocaleProvider>
          <NextTopLoader />
          <LoadingProvider>
            <ErrorProvider>
              <AuthProvider>
                <UserProvider>
                  <TransferProvider>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/login" element={<Login />} />
                      <Route element={<PrivateRoutes />}>
                        <Route
                          path="/credit-card-add"
                          element={<RegisterCard />}
                        />
                        <Route path="/transfer" element={<TransferPage />} />
                        <Route
                          path="/profile/:profileUsername"
                          element={<Profile />}
                        />
                        <Route path="/info" element={<InfoPage />} />
                        <Route
                          path="/verify-email"
                          element={<VerifyEmailPage />}
                        />
                        <Route
                          path="/change-password"
                          element={<ChangePasswordPage />}
                        />
                        <Route
                          path="/update-email"
                          element={<UpdateEmailPage />}
                        />
                        <Route
                          path="/confirmed-transfer"
                          element={<ConfirmTransferScreen />}
                        />
                        <Route
                          path="/admin-dashboard"
                          element={<AdminDashboard />}
                        />
                      </Route>
                    </Routes>
                  </TransferProvider>
                </UserProvider>
              </AuthProvider>
            </ErrorProvider>
          </LoadingProvider>
        </LocaleProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
