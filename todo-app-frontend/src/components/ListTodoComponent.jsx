import React, { useEffect, useState } from 'react';
import { deleteSingleTodo, retriveAllTodos } from '../service/TodoService';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../service/AuthenticationService';

const ListTodoComponent = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const authContext = useAuth();

  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    retriveAllTodos(authContext.usernamefromLogin).then((resp) =>
      setTodos(resp.data)
    );
  }

  function deleteTodo(id) {
    deleteSingleTodo(authContext.usernamefromLogin, id).then(() =>
      refreshTodos()
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-end  align-items-center my-3 ">
          <h5 className="text-end">Add new todo</h5> &nbsp;
          <button
            className="btn btn-success"
            onClick={() => navigate('/todo/-1')}
          >
            Add new Todo
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Username</th>
              <th scope="col">TargetDate</th>
              <th scope="col">IsDone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.username}</td>
                <td>{todo.targetDate}</td>
                <td>{JSON.stringify(todo.isDone)}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate('/todo/' + todo.id)}
                  >
                    Edit
                  </button>{' '}
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;
