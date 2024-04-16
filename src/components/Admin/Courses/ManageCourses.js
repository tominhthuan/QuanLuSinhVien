import React, { useState } from "react";
import CourseTable from "./CourseTable";

function ManageCourses() {
    const [courses, setCourses] = useState([]);
    const [courseInfo, setCourseInfo] = useState({
        courseCode: "",
        courseName: "",
        creditHours: "",
        instructor: ""
    });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedCourses = [...courses];
            updatedCourses[editingIndex] = courseInfo;
            setCourses(updatedCourses);
            setEditingIndex(null);
        } else {
            setCourses([...courses, courseInfo]);
        }
        setCourseInfo({
            courseCode: "",
            courseName: "",
            creditHours: "",
            instructor: ""
        });
    };

    const handleEdit = (index) => {
        setCourseInfo(courses[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedCourses = [...courses];
        updatedCourses.splice(index, 1);
        setCourses(updatedCourses);
    };

    return (
        <>
            <h2>{editingIndex !== null ? "Sửa thông tin môn học" : "Thêm thông tin môn học mới"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="courseCode">Mã môn học:</label>
                    <input type="text" id="courseCode" name="courseCode" value={courseInfo.courseCode} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="courseName">Tên môn học:</label>
                    <input type="text" id="courseName" name="courseName" value={courseInfo.courseName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="creditHours">Số tín chỉ:</label>
                    <input type="text" id="creditHours" name="creditHours" value={courseInfo.creditHours} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="instructor">Giảng viên:</label>
                    <input type="text" id="instructor" name="instructor" value={courseInfo.instructor} onChange={handleChange} />
                </div>
                <button type="submit">{editingIndex !== null ? "Cập nhật" : "Thêm mới"}</button>
            </form>
            <h2>Danh sách môn học</h2>
            <CourseTable courses={courses} onEdit={handleEdit} onDelete={handleDelete} />
        </>
    );
}

export default ManageCourses;
