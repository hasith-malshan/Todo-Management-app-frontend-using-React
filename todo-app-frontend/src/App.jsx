import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeComponent from './components/WelcomeComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <WelcomeComponent />
      <ListTodoComponent />
      <FooterComponent />
    </>
  );
}

export default App;
