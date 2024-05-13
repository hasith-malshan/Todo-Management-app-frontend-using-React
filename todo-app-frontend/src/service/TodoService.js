import axios from 'axios';
import { apiClient } from './ApiClient';

export const retriveAllTodos = (name) =>
  apiClient.get(`/users/${name}/todos/get/all`);

export const retriveSingleTodo = (name, id) =>
  apiClient.get(`/users/${name}/todos/get/${id}`);

export const deleteSingleTodo = (name, id) =>
  apiClient.delete(`/users/${name}/todos/${id}`);

export const addNewTodo = (name, todo) => {
  apiClient.post(`/users/${name}/todos`, todo);
};
export const updateTodo = (name, id, todo) => {
  apiClient.put(`/users/${name}/todos/${id}`, todo);
};
