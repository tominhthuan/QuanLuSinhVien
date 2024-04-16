import React from "react";

const StudentTable = ({ students, onDelete, onEdit }) => {

    const handleDelete = (index) => {
        onDelete(index);
    };


    const handleEdit = (index) => {
        onEdit(index);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Họ và tên</th>
                    <th>Mã sinh viên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Mã lớp</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.fullName}</td>
                        <td>{student.studentID}</td>
                        <td>{student.dateOfBirth}</td>
                        <td>{student.gender}</td>
                        <td>{student.address}</td>
                        <td>{student.email}</td>
                        <td>{student.phoneNumber}</td>
                        <td>{student.classCode}</td>
                        <td>
                            <button onClick={() => handleEdit(index)}>Sửa</button>
                            <button onClick={() => handleDelete(index)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentTable;
