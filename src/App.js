import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import ManageStudents from './components/Admin/Student/ManageStudents';
import ManageProfessors from './components/Admin/Professor/ManageProfessors';
import ManageCourses from './components/Admin/Courses/ManageCourses';
import ManageGrades from './components/Admin/Grades/ManageGrades';
import ManageFees from './components/Admin/Fees/ManageFees';
import './App.css';

function App() {



  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Content />
        <div className="main-content">
          <Routes>
            <Route path="/manage-students" element={<ManageStudents />} />
            <Route path="/manage-professors" element={<ManageProfessors />} />
            <Route path="/manage-courses" element={<ManageCourses />} />
            <Route path="/manage-grades" element={<ManageGrades />} />
            <Route path="/manage-feers" element={<ManageFees />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

