import React from "react";
import "./AttendancePage.css";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle, FaBell } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

const AttendancePage = () => {
  const employees = [
    {
      id: "01",
      name: "Darlene Robertson",
      designation: "Team Lead",
      department: "Backend Development",
      task: "Mobile app login page integration",
      status: "Work from home",
      profileImg: "https://via.placeholder.com/50",
      statusColor: "green",
    },
    {
      id: "02",
      name: "Leslie Alexander",
      designation: "Intern",
      department: "Designer",
      task: "Dashboard Design",
      status: "Present",
      profileImg: "https://via.placeholder.com/50",
      statusColor: "green",
    },
    {
      id: "03",
      name: "Ronald Richards",
      designation: "Senior designer",
      department: "Backend Development",
      task: "Dashboard Login page design, Dashboard Home page design",
      status: "Present",
      profileImg: "https://via.placeholder.com/50",
      statusColor: "green",
    },
    {
      id: "04",
      name: "Theresa Webb",
      designation: "Junior Developer",
      department: "Backend Development",
      task: "Mobile App Home page updates/changes",
      status: "Work from home",
      profileImg: "https://via.placeholder.com/50",
      statusColor: "green",
    },
    {
      id: "05",
      name: "Cody Fisher",
      designation: "Team Lead",
      department: "Designer",
      task: "--",
      status: "Medical Leave",
      profileImg: "https://via.placeholder.com/50",
      statusColor: "yellow",
    },
    {
      id: "06",
      name: "Devon Lane",
      designation: "Full Time",
      department: "Designer",
      task: "--",
      status: "Absent",
      profileImg: "https://via.placeholder.com/50",
      statusColor: "red",
    },
  ];

  return (
    <div className="attendance-page">
     <Sidebar/>
      <div className="main-content">
        <div className="header">
          <h1>Attendance</h1>
          <div className="header-right">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
            <FaBell className="icon" />
            <FaUserCircle className="icon" />
          </div>
        </div>
        <div className="filters">
          <select>
            <option>All</option>
            <option>Present</option>
            <option>Absent</option>
            <option>Work from home</option>
            <option>Medical Leave</option>
          </select>
        </div>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <img
                    src={employee.profileImg}
                    alt={employee.name}
                    className="profile-img"
                  />
                </td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.department}</td>
                <td>{employee.task}</td>
                <td>
                  <span
                    className="status"
                    style={{ color: employee.statusColor }}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
