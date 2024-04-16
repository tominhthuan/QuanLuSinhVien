// ManageStudents.js
import React, { useState } from "react";
import StudentTable from "./StudentTable";

const ManageStudents = () => {
    // State hooks
    const [students, setStudents] = useState([]);
    const [studentInfo, setStudentInfo] = useState({
        fullName: "",
        studentID: "",
        dateOfBirth: "",
        gender: "male",
        address: "",
        email: "",
        phoneNumber: "",
        classCode: "",
    });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedStudents = [...students];
            updatedStudents[editingIndex] = studentInfo;
            setStudents(updatedStudents);
            setEditingIndex(null);
        } else {
            setStudents([...students, studentInfo]);
        }
        setStudentInfo({
            fullName: "",
            studentID: "",
            dateOfBirth: "",
            gender: "male",
            address: "",
            email: "",
            phoneNumber: "",
            classCode: "",
        });
    };

    const handleEdit = (index) => {
        setStudentInfo(students[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedStudents = [...students];
        updatedStudents.splice(index, 1);
        setStudents(updatedStudents);
    };

    return (
        <>
            <h2>{editingIndex !== null ? "Sửa thông tin sinh viên" : "Thêm thông tin sinh viên mới"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Họ và tên:</label>
                    <input type="text" id="fullName" name="fullName" value={studentInfo.fullName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="studentID">Mã sinh viên:</label>
                    <input type="text" id="studentID" name="studentID" value={studentInfo.studentID} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Ngày sinh:</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" value={studentInfo.dateOfBirth} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="gender">Giới tính:</label>
                    <select id="gender" name="gender" value={studentInfo.gender} onChange={handleChange}>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="address">Địa chỉ:</label>
                    <input type="text" id="address" name="address" value={studentInfo.address} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={studentInfo.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Số điện thoại:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={studentInfo.phoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="classCode">Mã lớp:</label>
                    <input type="text" id="classCode" name="classCode" value={studentInfo.classCode} onChange={handleChange} />
                </div>
                <button type="submit">{editingIndex !== null ? "Cập nhật" : "Thêm mới"}</button>
            </form>
            <h2>Danh sách sinh viên</h2>
            <StudentTable students={students} onDelete={handleDelete} onEdit={handleEdit} />
        </>
    );
}

export default ManageStudents;
