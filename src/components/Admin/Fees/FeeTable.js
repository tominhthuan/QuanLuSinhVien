import React from 'react';

const FeeTable = ({ fees, onEdit, onDelete }) => {
    const handleEdit = (index) => {
        onEdit(index);
    };

    const handleDelete = (index) => {
        onDelete(index);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Mã học phí</th>
                    <th>Mã sinh viên</th>
                    <th>Số tiền học phí</th>
                    <th>Mã kỳ học</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {fees.map((fee, index) => (
                    <tr key={index}>
                        <td>{fee.MaHocPhi}</td>
                        <td>{fee.MaSV}</td>
                        <td>{fee.HocPhi}</td>
                        <td>{fee.KyHocID}</td>
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

export default FeeTable;
