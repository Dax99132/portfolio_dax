import React from 'react';

import Cropify1 from './Cropify-1.png';
import Cropify2 from './Cropify-2.png';
import Cropify3 from './Cropify-3.png';
import Cropify4 from './Cropify-4.png';
import Cropify5 from './Cropify-5.png';

import MagnifierImage from "../components/MagnifierImage";

export default function Cropify() {
  return (
    <div className="bg-grid text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cropify - Web Design</h1>
        <p className="mb-8 text-lg">
          Cropify is a conceptual web design created as an intermediary platform between farmers and buyers. 
          The design includes a logo splash screen, Signup and Login pages, and a functional Dashboard featuring 
          sections like Home, Add Product, Contracts, View Orders, and Profile. The focus was on creating a clean, 
          user-friendly interface for smooth navigation and direct agri-trade interactions.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <MagnifierImage src={Cropify1} alt="Screen 1" zoom={2} size={180} />
          <MagnifierImage src={Cropify2} alt="Screen 2" zoom={2} size={180} />
          <MagnifierImage src={Cropify3} alt="Screen 3" zoom={2} size={180} />
          <MagnifierImage src={Cropify4} alt="Screen 4" zoom={2} size={180} />

          {/* Last rotated image with magnifier */}
          <div className="md:col-span-2 md:row-span-2 ml-28 -mt-24">
            <MagnifierImage 
              src={Cropify5} 
              alt="Screen 5" 
              zoom={2} 
              size={220} 
              rotate={-90} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
