import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from '../components/Sidebar';
import { FiSearch } from "react-icons/fi";
import { FaDownload, FaTrashAlt, FaBell, FaUserCircle } from "react-icons/fa";
import close from '../assets/Icons/cancel.png'
import { createCandidate, getCandidates } from '../services/candidateService'; // Import the API functions

const DashboardPage = () => {
  const [candidates, setCandidates] = useState([]);
  // const navigate = useNavigate();
  const [status, setStatus] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    resume: null,
  });


  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await getCandidates();
      setCandidates(response);
    };
    fetchCandidates();
  }, []); 

  // const handleLogout = () => {
    
  //   console.log("Logged out");
  //   navigate("/");
  // };

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate({ ...newCandidate, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewCandidate({ ...newCandidate, resume: e.target.files[0] });
  };


  const handleAddCandidate = async (e) => {
    e.preventDefault();
    console.log("New Candidate Details:", newCandidate); 
    try {
      await createCandidate(newCandidate);
      const updatedCandidates = await getCandidates();
      setCandidates(updatedCandidates);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding candidate:", error);
    }
  };
  


  const handleStatusChange = async (id, newStatus) => {
    try {
     
      setStatus((prevState) => ({
        ...prevState,
        [id]: newStatus,
      }));

      
      await axios.put(`https://hr-dashboard-backend.onrender.com/api/candidates/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

     
      const updatedCandidates = await getCandidates();
      setCandidates(updatedCandidates);

      
      if (newStatus === "Selected") {
        // const selectedCandidate = updatedCandidates.find(candidate => candidate._id === id);
        
        // navigate("/employees", { state: { selectedCandidate } });
      }
    } catch (error) {
      console.error("Error changing status:", error);
    }
  };


  return (
   <>
    <div className="dashboard-container">

      <Sidebar className="sidebar"/>

      <main className="main-content">
    
<div className="candidates-page">
      <div className="header">
        <h1>Candidates</h1>
        <div className="header-right">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
          <button onClick={() => setIsModalOpen(true)}className="add-button">Add New Candidate</button>
          <FaBell className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </div>

      <div className="filters">
        <select>
          <option>All</option>
          <option>New</option>
          <option>Scheduled</option>
          <option>Selected</option>
          <option>Rejected</option>
        </select>
        <select>
          <option>All</option>
          <option>Intern</option>
          <option>Full Time</option>
        </select>
      </div>

      <table className="candidates-table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Candidate Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Resume</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

           {candidates.map((candidate, index) => (
                  <tr key={candidate._id}>
                    <td>{index + 1}</td>
                    <td>{candidate.fullName}</td>
                    <td>{candidate.email}</td>
                    <td>{candidate.phone}</td>
                    <td>{candidate.department}</td>
                    <td>
                      <select
                        style={{ borderColor: 'transparent' }}
                        value={status[candidate._id] || candidate.status}
                        onChange={(e) => handleStatusChange(candidate._id, e.target.value)}
                      >
                        <option>New</option>
                        <option>Scheduled</option>
                        <option>Selected</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                    <td>{candidate.experience}</td>
                    <td>
                      <FaDownload className="action-icon" />
                    </td>
                    <td>
                      <FaTrashAlt className="action-icon delete" />
                    </td>
                  </tr>
                ))}
        </tbody>
      </table>
    </div>

    {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            
            <div className="modal-contents">
            <h2 >Add New Candidate  </h2>
             </div>
             <img src={close} alt='close'  className="cancel-button" 
                  onClick={() => setIsModalOpen(false)}></img>

            <form onSubmit={handleAddCandidate}>
              <div style={{display:'flex' , marginTop:'30px'}}>
              <div className="form-group">
                
                <input
                  type="text"
                  name="fullName"
                  placeholder='Full Name'
                  value={newCandidate.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                
                <input
                  type="email"
                  name="email"
                   placeholder='Email'
                  value={newCandidate.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              </div>
              
              <div style={{display:'flex'}}>
              <div className="form-group">
               
                <input
                  type="tel"
                  name="phone"
                   placeholder='Phone Number'
                  value={newCandidate.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
               
                <input
                  type="text"
                  name="department"
                   placeholder='Department'
                  value={newCandidate.department}
                  onChange={handleInputChange}
                  required
                />
              </div>
              </div>
              <div style={{display:'flex'}}>
              <div className="form-group">
                
                <input
                  type="text"
                  name="experience"
                   placeholder='Experience'
                  value={newCandidate.experience}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
              
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                   
                  onChange={handleFileChange}
                  required
                />
              </div>
              </div>

              <div className="modal-actions">
                <button type="submit" className="save-button">
                  Save
                </button>
              
              </div>
            </form>
          </div>
        </div>
      )}
      </main>
    </div>
   </>
  );
};

export default DashboardPage;
