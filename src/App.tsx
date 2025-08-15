import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPortfolio from './MainPortfolio';
import RentEase from './designs/RentEase';
import Cignifi from './designs/Cignifi';
import ERP from './designs/ERP';
import Cropify from './designs/Cropify';
import Quizze from './designs/Quizze';
import Webdesign from './designs/Webdesign';
import Prototype from './designs/Prototype';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/designs/rent-ease" element={<RentEase />} />
        <Route path="/designs/cignifi" element={<Cignifi />} />
        <Route path="/designs/erp" element={<ERP />} />
        <Route path="/designs/cropify" element={<Cropify />} />
        <Route path="/designs/quizze" element={<Quizze />} />
        <Route path="/designs/Webdesign" element={<Webdesign />} />
        <Route path="/designs/Prototype" element={<Prototype />} />
      </Routes>
    </BrowserRouter>
  );
}
