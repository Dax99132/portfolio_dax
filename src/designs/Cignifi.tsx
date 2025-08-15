import React from 'react';

import cinfigi from './cinfigi.png';


export default function Cignifi() {
  return (
    <div className="bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cignifi - Application ui design</h1>
        <p className="mb-8 text-lg">
       This UI design exercise features the Cignifi mobile app concept, including a clean splash screen with logo branding, followed by Login and Signup pages. The goal was to explore modern mobile authentication flows while maintaining visual consistency and intuitive user experience.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <img src={cinfigi} alt="Screen 1" className="rounded-lg shadow-lg" />
          
        </div>
      </div>
    </div>
  );
}
