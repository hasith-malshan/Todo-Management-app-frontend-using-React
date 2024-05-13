import axios from 'axios';

export const retriveAllTodos = (name) =>
  axios.get(`http://localhost:8080/users/${name}/todos/get/all`);

export const retriveSingleTodo = (name, id) =>
  axios.get(`http://localhost:8080/users/${name}/todos/get/${id}`);

export const deleteSingleTodo = (name, id) =>
  axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);

export const addNewTodo = (name, todo) => {
  axios.post(`http://localhost:8080/users/${name}/todos`, todo);
};
export const updateTodo = (name, id, todo) => {
  axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
};
