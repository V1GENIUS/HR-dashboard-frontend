import axios from 'axios';


const API_URL = 'https://hr-dashboard-backend.onrender.com/api/candidates';

export const getCandidates = async () => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const createCandidate = async (candidateData) => {
  const formData = new FormData();
  formData.append("fullName", candidateData.fullName);
  formData.append("email", candidateData.email);
  formData.append("phone", candidateData.phone);
  formData.append("department", candidateData.department);
  formData.append("experience", candidateData.experience);
  formData.append("resume", candidateData.resume);

  const response = await axios.post('https://hr-dashboard-backend.onrender.com/api/candidates/add', formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
