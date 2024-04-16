import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Sidebar/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/student-info">Thông tin sinh viên</Link></li>
                <li><Link to="/professor-info">Thông tin giảng viên</Link></li>
                <li><Link to="/manage-students">Quản lý sinh viên</Link></li>
                <li><Link to="/manage-professors">Quản lý giảng viên</Link></li>
                <li><Link to="/manage-courses">Quản lý môn học</Link></li>
                <li><Link to="/manage-grades">Quản lý điểm</Link></li>
                <li><Link to="/manage-feers">Quản lý học phí</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
