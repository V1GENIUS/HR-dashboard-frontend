import React from "react";
import "./LeavePage.css";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle, FaBell } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

const LeavePage = () => {
  const appliedLeaves = [
    {
      id: "01",
      name: "Esther Howard",
      role: "Designer",
      date: "10/09/24",
      reason: "Going to Home town",
      status: "Pending",
      statusColor: "orange",
      docs: "https://via.placeholder.com/50",
    },
    {
      id: "02",
      name: "Wade Warren",
      role: "Senior Software Developer",
      date: "10/09/24 - 13/09/24",
      reason: "Had fever Dr. told to rest for 3 days",
      status: "Approved",
      statusColor: "green",
      docs: "https://via.placeholder.com/50",
    },
    {
      id: "03",
      name: "Jenny Wilson",
      role: "Developer",
      date: "11/09/24",
      reason: "Not feeling Well",
      status: "Rejected",
      statusColor: "red",
      docs: "https://via.placeholder.com/50",
    },
  ];

  const leaveCalendar = [
    {
      id: "01",
      name: "Wade Warren",
      role: "Senior Software Developer",
      date: "10/09/24 - 13/09/24",
    },
  ];

  return (
    <div className="leave-page">
     <Sidebar/>
      <div className="main-content">
        <div className="header">
          <h1>Leave</h1>
          <div className="header-right">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
            <FaBell className="icon" />
            <FaUserCircle className="icon" />
          </div>
        </div>
        <div className="actions">
          <select>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
          <button className="add-leave-btn">Add New Leave</button>
        </div>
        <div className="leave-section">
          <div className="applied-leaves">
            <h2>Applied Leaves</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Docs</th>
                </tr>
              </thead>
              <tbody>
                {appliedLeaves.map((leave) => (
                  <tr key={leave.id}>
                    <td>
                      {leave.name} <br />
                      <span className="role">{leave.role}</span>
                    </td>
                    <td>{leave.date}</td>
                    <td>{leave.reason}</td>
                    <td>
                      <span
                        className="status"
                        style={{ color: leave.statusColor }}
                      >
                        {leave.status}
                      </span>
                    </td>
                    <td>
                      <a href={leave.docs} target="_blank" rel="noreferrer">
                        📄
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="leave-calendar">
            <h2>Leave Calendar</h2>
            <div className="calendar">
              {leaveCalendar.map((leave) => (
                <div className="calendar-item" key={leave.id}>
                  <p className="date">{leave.date}</p>
                  <p className="name">{leave.name}</p>
                  <p className="role">{leave.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavePage;
