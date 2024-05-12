import React, { useEffect, useState } from 'react';
import TodoService from '../service/TodoService';

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoService.retriveAllTodos('hasith').then((resp) => {
      console.log(resp.data);
      setTodos(resp.data);
    });
  }, [todos]);

  function refreshTodos() {
    TodoService.retriveAllTodos('hasith').then((resp) => setTodos(resp.data));
  }

  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">description</th>
            <th scope="col">username</th>
            <th scope="col">targetDate</th>
            <th scope="col">isDone</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <th scope="row">{todo.id}</th>
              <td>{todo.description}</td>
              <td>{todo.username}</td>
              <td>{todo.targetDate}</td>
              <td>{JSON.stringify(todo.isDone)}</td>
              <td>
                <button className="btn btn-warning">Edit</button> &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    TodoService.deleteTodo('hasith', todo.id);
                    refreshTodos();
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
  );
};

export default ListTodoComponent;
