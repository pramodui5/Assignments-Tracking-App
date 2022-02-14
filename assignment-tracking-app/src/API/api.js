import axios from 'axios';

// User
export const loadUserApi = async () => await axios.get('http://localhost:5000/users');

export const createUserApi = async (user) => await axios.post('http://localhost:5000/users', user);

export const deleteUserApi = async (userId) =>
  await axios.delete(`http://localhost:5000/users/${userId}`);

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`http://localhost:5000/users/${userId}`, userInfo);

// Assignment
export const loadAssignmentApi = async () => await axios.get('http://localhost:5000/assignments');

export const createAssignmentApi = async (assignment) =>
  await axios.post('http://localhost:5000/assignments', assignment);

export const deleteAssignmentApi = async (id) =>
  await axios.delete(`http://localhost:5000/assignments/${id}`);

export const updateAssignmentApi = async (id, assignmentInfo) =>
  await axios.put(`http://localhost:5000/assignments/${id}`, assignmentInfo);
