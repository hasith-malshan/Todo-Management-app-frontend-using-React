import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
  addNewTodo,
  retriveSingleTodo,
  updateTodo,
} from '../service/TodoService';

const TodoComponent = () => {
  const { id } = useParams();

  const [descriptionToLoad, setDescriptionToLoad] = useState('');
  const [targetDateToLoad, setTargetDateToLoad] = useState('');

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: descriptionToLoad,
      targetDate: targetDateToLoad,
    },
  });

  useEffect(() => retriveTodo(), [id]);

  function onSubmit(data) {
    if (id != -1) {
      const todo = {
        id: id,
        description: data.description,
        username: 'hasith',
        targetDate: data.targetDate,
        isDone: false,
      };
      console.log(todo);
      updateTodo('hasith', id, todo);
    } else {
      const todoDao = {
        description: data.description,
        username: 'hasith',
        targetDate: data.targetDate,
      };
      addNewTodo('hasith', todoDao);
    }
  }

  function retriveTodo() {
    if (id != -1) {
      retriveSingleTodo('hasith', id).then((resp) => {
        setDescriptionToLoad(resp.data.description);
        setTargetDateToLoad(resp.data.targetDate);
        reset({
          description: resp.data.description,
          targetDate: resp.data.targetDate,
        });
      });
    }
  }

  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <div className="d-flex flex-column ">
        <h1>Enter Todo Details</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            onSubmit(data);
            reset({ description: '', targetDate: null });
          })}
        >
          <div className="input-wrapper">
            <label htmlFor="todoName">Description</label>
            <input
              type="text"
              name="description"
              {...register('description', {
                required: 'Description is required',
                minLength: 8,
              })}
              id="description"
              placeholder="add description for todo"
              className="form-control"
              onChange={(event) => {
                setValue('description', event.target.value);
              }}
            />
          </div>
          <div className="input-wrapper mt-2 ">
            <label htmlFor="todoName">TargetDate</label>
            <input
              type="date"
              name="todoName"
              {...register('targetDate', {
                required: 'Target Date is required.',
              })}
              id="todoName"
              placeholder="add todo name"
              className="form-control"
              onChange={(event) => {
                setValue('targetDate', event.target.value);
              }}
            />{' '}
            <div className="mt-2">
              <input
                type="submit"
                className="btn btn-success"
                value={'add todo'}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoComponent;
