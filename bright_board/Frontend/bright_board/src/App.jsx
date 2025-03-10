import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignIn from './components/SigninStudent';
import SignUp from './components/StudentSignup';
import DashboardStudent from './components/DashboardStudent';
import StudentProfile from './components/ProfileStudent'
import Result from './components/Result';
import AdminDashboard from './Admin/pages/AdminDashboard';
import StudentManagementPage from './Admin/pages/StudentManagementPage';
import AttendanceManagement from './Admin/pages/AttendanceManagement';
import StudyMaterialManagement from './Admin/pages/StudyMaterialManagement';
import AdminSignup from './Admin/pages/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/s/signin" element={<SignIn />} />
        <Route path="/s/signup" element={<SignUp />} />
        <Route path ="/a/signin" element={<SignIn />} />
        <Route path ="/a/signup" element={<AdminSignup />} />
        <Route path="/s/dashboard" element={<DashboardStudent />} />
        <Route path="/s/profile" element={<StudentProfile />} />
        <Route path="/s/result" element={<Result />} />
        <Route path="/a/dashboard" element={<AdminDashboard />} />
        <Route path="/a/students" element={<StudentManagementPage />} />
        <Route path="/a/attendance" element={<AttendanceManagement />} />
        <Route path="/a/materials" element={<StudyMaterialManagement />} />
      </Routes>
    </Router>
  );
}

export default App;