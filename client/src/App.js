import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';


import ExpenseTracker from "./pages";
import ReportsPage from "./pages/Reports";
import TransactionsPage from "./pages/Transactions";
import SettingsPage from "./pages/Settings";
import ForbiddenPage from "./pages/Forbidden";
import UnAuthorizedPage from "./pages/UnAuthorized";
import PageNotFound from "./pages/PageNotFound";
import MaintenancePage from './pages/Maintenance'

import ROUTES from './constants/react-route-constants'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        {/* Login Page */}
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        {/* Register Page */}
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        

        {/* Protected Routes */}
        <Route path="/" element={<ExpenseTracker />}>
          {/* Reports/Home/Dashboard Page */}
          <Route index={false} path={ROUTES.REPORTS} element={<ReportsPage />} />
          {/* Transactions Page */}
          <Route path={ROUTES.TRANSACTIONS} element={<TransactionsPage />} />
          {/* Settings Page */}
          <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />

          {/* Redirects */}
          <Route path={ROUTES.HOME} element={<Navigate to={`/${ROUTES.REPORTS}`} />} />
          <Route path={ROUTES.DASHBOARD} element={<Navigate to={`/${ROUTES.REPORTS}`} />} />
          <Route path="*" element={<Navigate to={ROUTES.PAGE_NOT_FOUND} />} />
        </Route>

        {/* Other Routes */}
        {/* UnAuthorized Page */}
        <Route path={ROUTES.UNAUTHORIZED} element={<UnAuthorizedPage />} />
        {/* Forbidden Page */}
        <Route path={ROUTES.FORBIDDEN} element={<ForbiddenPage />} />
        {/* 404 Page */}
        <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path={ROUTES.MAINTENANCE} element={<MaintenancePage />} />
        <Route path="*" element={<Navigate to={`/${ROUTES.PAGE_NOT_FOUND}`} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
