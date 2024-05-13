import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../service/AuthenticationService';

const WelcomeComponent = () => {
  const authContext = useAuth();

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">
          Welcome to Todo App {authContext.usernamefromLogin}
        </h1>
        <div className="d-flex justify-content-center mt-3">
          <span>
            Do you have an account.?? <Link to={'/login'}>Click here</Link>
          </span>
          <span className="ms-5">
            New to Todo-App.?? <Link to={'/register'}>Create Account</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default WelcomeComponent;
