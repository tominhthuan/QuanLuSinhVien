import React from 'react';

const GradeTable = ({ grades, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Mã điểm</th>
                    <th>Mã sinh viên</th>
                    <th>Mã môn học</th>
                    <th>Điểm</th>
                    <th>Kỳ học ID</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {grades.map((grade, index) => (
                    <tr key={index}>
                        <td>{grade.MaDiem}</td>
                        <td>{grade.studentID}</td>
                        <td>{grade.courseCode}</td>
                        <td>{grade.grade}</td>
                        <td>{grade.KyHocID}</td>
                        <td>
                            <button onClick={() => onEdit(index)}>Edit</button>
                            <button onClick={() => onDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default GradeTable;
