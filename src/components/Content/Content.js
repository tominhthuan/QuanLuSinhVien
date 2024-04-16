import React from 'react';
import "../Content/Content.css";
import logo from '../assest/logo.png';

const Content = () => {
    return (
        <div className="content">
            <div className='left'>
                <div className='left-logo'>
                    <img className='logo' href="/" src={logo} alt='/' />
                    <a href='/'>vnua.edu.vn</a>
                </div>
                <div className='left-item'>
                    <ul>
                        <li><a href="/" className="left-a fa-solid fa-house-user"><span>Trang Chủ</span></a></li>
                        <li><a href="/" className="left-a fa-solid fa-house-user"><span>Giáo viên</span></a></li>
                        <li><a href="/" className="left-a fa-solid fa-graduation-cap"><span>Sinh viên</span></a></li>
                        <li><a href="/" className="left-a fa-solid fa-building-columns"><span>Thanh Toán</span></a></li>
                        <li><a href="/" className="left-a fa-solid fa-gear"><span>Cài đặt tài khoản</span></a></li>
                        <li><a href="/" className="left-a fa-solid fa-chart-simple"><span>Kì thi</span></a></li>
                        <li><a href="/" className="left-a left-b fa-solid fa-house-user"><span>Featues</span></a></li>
                    </ul>
                </div>
            </div>
            <div className='right'>
                <div className='right-header'>
                    <p>Xin chào An.</p>
                    <button className='button-pass'>Đăng xuất</button>
                </div>
                <h1>Chào mừng đến trang quản lí/vnua.edu.vn</h1>
                <div className='right-content'>
                    <ul>
                        <li>
                            <a href='/' className='icon-add'>
                                <i className="fa-solid fa-user-plus"></i>
                            </a>
                            <a href='/' className='font-text'>
                                Thêm tài khoản quản trị mới
                            </a>

                        </li>
                        <p>
                            Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học viên của bạn
                        </p>
                        <li>
                            <a href='/' className='icon-add'>
                                <i className="fa-solid fa-landmark"></i>
                            </a>
                            <a href='/' className='font-text'>Thêm lớp học</a>
                        </li>
                        <p>
                            Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học viên của bạn
                        </p>
                        <li>
                            <a href='/' className='icon-add'>
                                <i className="fa-solid fa-graduation-cap"></i>
                            </a>
                            <a href='/' className='font-text'>Thêm sinh viên</a>
                        </li>
                        <p>
                            Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học viên của bạn
                        </p>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Content;