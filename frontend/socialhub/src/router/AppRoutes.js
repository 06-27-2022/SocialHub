import React from 'react';
import { Route, Routes } from "react-router-dom";
import { MainPage } from '../components/MainPage/MainPage';
import {Login} from '../components/Login/Login'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/login" element={<Login />} />
  </Routes>
)