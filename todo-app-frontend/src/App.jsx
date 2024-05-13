import './App.css';
import WelcomeComponent from './components/WelcomeComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import TestComponent from './components/TestComponent';
import TodoComponent from './components/TodoComponent';
import AuthProvider, { useAuth } from './service/AuthenticationService';

function AuthenticatedRoutes({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to={'/'} />;
}

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<WelcomeComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>

            <Route
              path="/todo"
              element={
                <AuthenticatedRoutes>
                  <ListTodoComponent></ListTodoComponent>
                </AuthenticatedRoutes>
              }
            ></Route>
            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoutes>
                  <TodoComponent />
                </AuthenticatedRoutes>
              }
            ></Route>

            <Route path="*" element={<WelcomeComponent />}></Route>
          </Routes>
        </BrowserRouter>
        <FooterComponent />
      </AuthProvider>
    </>
  );
}

export default App;
