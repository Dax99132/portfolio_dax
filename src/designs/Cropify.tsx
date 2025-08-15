import React from 'react';

import Cropify1 from './Cropify-1.png';
import Cropify2 from './Cropify-2.png';
import Cropify3 from './Cropify-3.png';
import Cropify4 from './Cropify-4.png';
import Cropify5 from './Cropify-5.png';


export default function Cropify() {
  return (
    <div className="bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cropify - Web Design</h1>
        <p className="mb-8 text-lg">
        Cropify is a conceptual web design created as an intermediary platform between farmers and buyers. The design includes a logo splash screen, Signup and Login pages, and a functional Dashboard featuring sections like Home, Add Product, Contracts, View Orders, and Profile. The focus was on creating a clean, user-friendly interface for smooth navigation and direct agri-trade interactions.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <img src={Cropify1} alt="Screen 1" className="rounded-lg shadow-lg" />
          <img src={Cropify2} alt="Screen 2" className="rounded-lg shadow-lg" />
          <img src={Cropify3} alt="Screen 3" className="rounded-lg shadow-lg" />
          <img src={Cropify4} alt="Screen 4" className="rounded-lg shadow-lg" />
          {/* Rotate and adjust the last image */}
          <img
            src={Cropify5}
            alt="Screen 5"
            className="rounded-lg shadow-lg -rotate-90 md:col-span-2 md:row-span-2 ml-28 -mt-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
