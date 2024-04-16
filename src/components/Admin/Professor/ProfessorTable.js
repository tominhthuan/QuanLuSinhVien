import React from "react";

function ProfessorTable({ professors, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Họ và tên</th>
                    <th>Mã giảng viên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Mã khoa</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {professors.map((professor, index) => (
                    <tr key={index}>
                        <td>{professor.fullName}</td>
                        <td>{professor.professorID}</td>
                        <td>{professor.dateOfBirth}</td>
                        <td>{professor.gender}</td>
                        <td>{professor.address}</td>
                        <td>{professor.email}</td>
                        <td>{professor.phoneNumber}</td>
                        <td>{professor.departmentCode}</td>
                        <td>
                            <button onClick={() => onEdit(index)}>Sửa</button>
                            <button onClick={() => onDelete(index)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProfessorTable;
