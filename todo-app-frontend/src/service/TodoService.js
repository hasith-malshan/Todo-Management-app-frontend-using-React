import axios from 'axios';

class TodoService {
  retriveAllTodos(name) {
    return axios.get(`http://localhost:8080/users/${name}/todos/get/all`);
  }
}

export default new TodoService();
