import React, { useState } from 'react';
import FeeTable from './FeeTable';

const ManageFees = () => {
    const [fees, setFees] = useState([]);
    const [feeInfo, setFeeInfo] = useState({
        MaHocPhi: "",
        MaSV: "",
        HocPhi: "",
        KyHocID: ""
    });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeeInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedFees = [...fees];
            updatedFees[editingIndex] = feeInfo;
            setFees(updatedFees);
            setEditingIndex(null);
        } else {
            setFees([...fees, feeInfo]);
        }
        setFeeInfo({
            MaHocPhi: "",
            MaSV: "",
            HocPhi: "",
            KyHocID: ""
        });
    };

    const handleEdit = (index) => {
        setFeeInfo(fees[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedFees = [...fees];
        updatedFees.splice(index, 1);
        setFees(updatedFees);
    };

    return (
        <div>
            <h2>Quản lý Học Phí</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="MaHocPhi">Mã học phí:</label>
                    <input type="text" name="MaHocPhi" value={feeInfo.MaHocPhi} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="MaSV">Mã sinh viên:</label>
                    <input type="text" name="MaSV" value={feeInfo.MaSV} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="HocPhi">Số tiền học phí:</label>
                    <input type="text" name="HocPhi" value={feeInfo.HocPhi} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="KyHocID">Mã kỳ học:</label>
                    <input type="text" name="KyHocID" value={feeInfo.KyHocID} onChange={handleChange} />
                </div>
                <button type="submit">{editingIndex !== null ? "Cập nhật" : "Thêm mới"}</button>
            </form>
            <h2>Học Phí</h2>
            <FeeTable fees={fees} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default ManageFees;
