import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { PrivateRoute } from './components/PrivateRoute';
import Register from './pages/Register';
import EmployeePage from './pages/Dashboard pages/EmployeePage';
import AttendancePage from './pages/Dashboard pages/AttendancePage';
import LeavePage from './pages/Dashboard pages/LeavePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />


        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
            }
        />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/leave" element={<LeavePage />} />
      </Routes>
    </Router>
  );
}

export default App;
