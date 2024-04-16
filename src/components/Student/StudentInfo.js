import React, { useState } from 'react';

const StudentInfo = () => {
    const [studentInfo, setStudentInfo] = useState({
        fullName: 'Nguyễn Văn A',
        studentID: 'SV001',
        dob: '01/01/2000',
        gender: 'Nam',
        address: '123 Đường ABC, Quận XYZ, TP HCM',
        email: 'nguyenvana@example.com',
        phone: '0123456789'
    });

    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <p><strong>Họ và tên:</strong> {studentInfo.fullName}</p>
            <p><strong>Mã sinh viên:</strong> {studentInfo.studentID}</p>
            <p><strong>Ngày sinh:</strong> {studentInfo.dob}</p>
            <p><strong>Giới tính:</strong> {studentInfo.gender}</p>
            <p><strong>Địa chỉ:</strong> {studentInfo.address}</p>
            <p><strong>Email:</strong> {studentInfo.email}</p>
            <p><strong>Số điện thoại:</strong> {studentInfo.phone}</p>
        </div>
    );
}

export default StudentInfo;
