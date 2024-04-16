import React, { useState } from "react";
import ProfessorTable from "./ProfessorTable";

const ManageProfessors = () => {
    const [professors, setProfessors] = useState([]);
    const [professorInfo, setProfessorInfo] = useState({
        fullName: "",
        professorID: "",
        dateOfBirth: "",
        gender: "male",
        address: "",
        email: "",
        phoneNumber: "",
        departmentCode: "",
    });

    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfessorInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedProfessors = [...professors];
            updatedProfessors[editingIndex] = professorInfo;
            setProfessors(updatedProfessors);
            setEditingIndex(null);
        } else {
            setProfessors([...professors, professorInfo]);
        }
        setProfessorInfo({
            fullName: "",
            professorID: "",
            dateOfBirth: "",
            gender: "male",
            address: "",
            email: "",
            phoneNumber: "",
            departmentCode: "",
        });
    };

    const handleEdit = (index) => {
        setProfessorInfo(professors[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedProfessors = [...professors];
        updatedProfessors.splice(index, 1);
        setProfessors(updatedProfessors);
    };

    return (
        <>
            <h2>{editingIndex !== null ? "Sửa thông tin giảng viên" : "Thêm thông tin giảng viên mới"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Họ và tên:</label>
                    <input type="text" id="fullName" name="fullName" value={professorInfo.fullName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="professorID">Mã giảng viên:</label>
                    <input type="text" id="professorID" name="professorID" value={professorInfo.professorID} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Ngày sinh:</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" value={professorInfo.dateOfBirth} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="gender">Giới tính:</label>
                    <select id="gender" name="gender" value={professorInfo.gender} onChange={handleChange}>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="address">Địa chỉ:</label>
                    <input type="text" id="address" name="address" value={professorInfo.address} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={professorInfo.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Số điện thoại:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={professorInfo.phoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="departmentCode">Mã khoa:</label>
                    <input type="text" id="departmentCode" name="departmentCode" value={professorInfo.departmentCode} onChange={handleChange} />
                </div>
                <button type="submit">{editingIndex !== null ? "Cập nhật" : "Thêm mới"}</button>
            </form>
            <h2>Danh sách giảng viên</h2>
            <ProfessorTable professors={professors} onDelete={handleDelete} onEdit={handleEdit} />
        </>
    );
}

export default ManageProfessors;
