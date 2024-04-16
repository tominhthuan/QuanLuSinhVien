import React from 'react';
import "../Content/Content.css";

const Content = () => {
    return (
        <div className="content">
            <div className='left'>
                <a href='/'>vnua.edu.vn</a>
                <div className='left-item'>
                    <ul>
                        <li>Trang Chủ</li>
                        <li>Giáo viên</li>
                        <li>Sinh viên</li>
                        <li>Thanh Toán</li>
                        <li>Cài đặt tài khoản</li>
                        <li>Kì thi</li>
                        <li>Featues</li>
                    </ul>
                </div>
            </div>
            <div className='right'>
                <p>Xin chào An.</p>
                <h1>Chào mừng đến trang quản lí/vnua.edu.vn</h1>
                <ul>
                    <li>
                        <a href='/'>
                            icon
                            <p>Thêm tài khoản quản trị mới</p>
                            <span>
                                Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học viên của bạn
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            icon
                            <p>Thêm lớp học</p>
                            <span>
                                Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học viên của bạn
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            icon
                            <p>Thêm sinh viên</p>
                            <span>
                                Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học viên của bạn
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Content;