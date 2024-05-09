import React from 'react';

const WelcomeComponent = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">Welcome to Todo App</h1>
        <div className="d-flex justify-content-center mt-3">
          <span>
            Do you have an account.?? <a href="">Login here</a>
          </span>
          <span className="ms-5">
            New to Todo-App.?? <a href="">Create Account</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default WelcomeComponent;
