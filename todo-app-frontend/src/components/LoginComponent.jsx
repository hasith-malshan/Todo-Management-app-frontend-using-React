import React from 'react';

const LoginComponent = () => {
  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div className="row d-flex flex-column ">
          <div className="input-wrapper">
            <label htmlFor="name" className="me-2">
              Name
            </label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className=" mt-2 input-wrapper">
            <label htmlFor="name" className="me-2">
              Password
            </label>
            <input type="text" id="password" className="form-control" />
          </div>
          <div className="mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
