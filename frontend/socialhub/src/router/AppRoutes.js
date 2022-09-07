import React from 'react';
import { Route, Routes } from "react-router-dom";
import { MainPage } from '../components/MainPage/MainPage';
import {Login} from '../components/Login/Login'
import { Memes } from '../components/Memes/Memes';
import { UserPage } from '../components/UserPage/UserPage'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/groups/memes" element={<Memes />} />
    <Route path="/userpage" element={<UserPage />} />
  </Routes>
)