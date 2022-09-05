import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';

// import Layout from './components/MainPage/Layout';
// import Login from './components/Login/Login';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppRoutes></AppRoutes>
    </Router>
  );
}

export default App;


