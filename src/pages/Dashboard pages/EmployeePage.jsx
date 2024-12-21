import React,{ useState, useEffect} from "react";
import "./EmployeePage.css";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle, FaBell, FaEdit, FaTrashAlt } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
// import { useLocation } from 'react-router-dom';
import axios from 'axios';

const EmployeePage = () => {
  // const location = useLocation();
  // const selectedCandidate = location.state?.selectedCandidate;
 

  const [employees, setEmployees] = useState([]); 
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); 
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employees"); 
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  
  const filteredEmployees =
    selectedStatus === "All"
      ? employees
      : employees.filter((employee) => employee.position === selectedStatus);

 
  const searchedEmployees = filteredEmployees.filter((employee) => {
    const name = employee.name?.toLowerCase() || "";
    const email = employee.email?.toLowerCase() || "";
  
    return (
      name.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase())
    );
  });
  
  return (

    <div className="employee-page">
      <Sidebar />
      <div className="main-content">
        
        <div className="header">
          <h1>Employees</h1>
          <div className="header-right">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaBell className="icon" />
            <FaUserCircle className="icon" />
          </div>
        </div>

      
        <div className="filters">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Intern">Intern</option>
            <option value="Full Time">Full Time</option>
          </select>
        </div>

       
        <table className="employee-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Employee Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Department</th>
              <th>Date of Joining</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           
            {searchedEmployees.map((employee) => (
              <tr key={employee._id}>
                <td>
                  <img
                    src={employee.profileImg || "https://via.placeholder.com/50"}
                    alt={employee.name}
                    className="profile-img"
                  />
                </td>
                <td>{employee.fullName}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>{employee.date_of_joining}</td>
                <td>
                  <FaEdit className="action-icon edit" />
                  <FaTrashAlt className="action-icon delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default EmployeePage;
