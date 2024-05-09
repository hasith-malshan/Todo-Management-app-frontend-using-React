import './App.css';
import WelcomeComponent from './components/WelcomeComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/todo" element={<ListTodoComponent />}></Route>
          <Route path="*" element={<WelcomeComponent />}></Route>
        </Routes>
      </BrowserRouter>

      <FooterComponent />
    </>
  );
}

export default App;
