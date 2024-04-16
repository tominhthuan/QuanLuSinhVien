import React, { useState } from 'react';
import GradeTable from './GradeTable';

const ManageGrades = () => {
    const [grades, setGrades] = useState([]);
    const [gradeInfo, setGradeInfo] = useState({
        MaDiem: "",
        studentID: "",
        courseCode: "",
        grade: "",
        KyHocID: ""
    });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGradeInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedGrades = [...grades];
            updatedGrades[editingIndex] = gradeInfo;
            setGrades(updatedGrades);
            setEditingIndex(null);
        } else {
            setGrades([...grades, gradeInfo]);
        }
        setGradeInfo({
            MaDiem: "",
            studentID: "",
            courseCode: "",
            grade: "",
            KyHocID: ""
        });
    };

    const handleEdit = (index) => {
        setGradeInfo(grades[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedGrades = [...grades];
        updatedGrades.splice(index, 1);
        setGrades(updatedGrades);
    };

    return (
        <div>
            <h2>Quản lý điểm</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="MaDiem">Mã điểm:</label>
                    <input type="text" name="MaDiem" value={gradeInfo.MaDiem} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="studentID">Mã sinh viên:</label>
                    <input type="text" name="studentID" value={gradeInfo.studentID} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="courseCode">Mã môn học:</label>
                    <input type="text" name="courseCode" value={gradeInfo.courseCode} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="grade">Điểm:</label>
                    <input type="text" name="grade" value={gradeInfo.grade} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="KyHocID">Kỳ học ID:</label>
                    <input type="text" name="KyHocID" value={gradeInfo.KyHocID} onChange={handleChange} />
                </div>
                <button type="submit">{editingIndex !== null ? "Update" : "Add"}</button>
            </form>
            <h2>Danh Sách Điểm</h2>
            <GradeTable grades={grades} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default ManageGrades;
