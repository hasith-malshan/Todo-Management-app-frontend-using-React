import axios from 'axios';

class TodoService {
  retriveAllTodos(name) {
    return axios.get(`http://localhost:8080/users/${name}/todos/get/all`);
  }

  deleteTodo(name, id) {
    axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }
}

export default new TodoService();
