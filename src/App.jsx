import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AgeGatePage from './pages/AgeGatePage';
import BasesPage from './pages/BasesPage';
import Form from './pages/Form';
import Popup from './containers/popup'
import './App.css'
import "./scss/style.scss";


function App() {
  let age = JSON.parse(localStorage.getItem("ageGatePassed") || sessionStorage.getItem("ageGatePassed"));

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={age === true ? <Navigate to="/home" replace /> : <Navigate to="/agegate" replace />} />
        <Route path="/agegate" element={age === true ? <Navigate to="/home" replace /> : < AgeGatePage />} />
        <Route path="/home" element={age === true ? < HomePage /> : <Navigate to="/agegate" replace />} />
        <Route path="/bases-y-condiciones" element={< BasesPage />} />
        <Route path="/form" element={< Form />} />
        <Route path="/pop" element={< Popup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
