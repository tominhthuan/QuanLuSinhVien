import React from "react";

function CourseTable({ courses, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Mã môn học</th>
                    <th>Tên môn học</th>
                    <th>Số tín chỉ</th>
                    <th>Giảng viên</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course, index) => (
                    <tr key={index}>
                        <td>{course.courseCode}</td>
                        <td>{course.courseName}</td>
                        <td>{course.creditHours}</td>
                        <td>{course.instructor}</td>
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

export default CourseTable;

