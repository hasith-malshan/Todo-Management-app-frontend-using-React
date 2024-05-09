import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import authenticate from '../service/AuthenticationService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div className="row d-flex flex-column ">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              if (authenticate(data.username, data.password)) {
                navigate('/todo');
              } else {
                navigate('/');
              }
            })}
          >
            <p>{errors.username?.message}</p>
            <p>{errors.password?.message}</p>
            <div className="input-wrapper">
              <label htmlFor="name" className="me-2">
                Username
              </label>
              <input
                type="text"
                {...register('username', { required: 'username is required' })}
                id="name"
                className="form-control"
                placeholder="username"
              />
            </div>
            <div className=" mt-2 input-wrapper">
              <label htmlFor="name" className="me-2">
                Password
              </label>
              <input
                type="text"
                {...register('password', {
                  required: 'password is requied',
                  minLength: 8,
                })}
                id="password"
                className="form-control"
                placeholder="password"
              />
            </div>
            <div className="mt-2">
              <input
                type="submit"
                className="btn btn-primary"
                value={'submit'}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
