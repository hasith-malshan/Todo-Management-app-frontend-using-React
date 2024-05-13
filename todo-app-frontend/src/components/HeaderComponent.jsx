import { Link } from 'react-router-dom';
import { useAuth } from '../service/AuthenticationService';

const HeaderComponent = () => {
  const authContext = useAuth();

  function logout() {
    authContext.logout();
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Todo-App
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">
                  Todos
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-collapse  justify-content-end">
              <li className="nav-item">
                <Link
                  to="/logout"
                  className="nav-link"
                  onClick={() => logout()}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
