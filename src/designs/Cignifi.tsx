import React from 'react';

import cinfigi from './cinfigi.png';
import MagnifierImage from "../components/MagnifierImage";

export default function Cignifi() {
  return (
    <div className="bg-grid text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cignifi - Application UI Design</h1>
        <p className="mb-8 text-lg">
          This UI design exercise features the Cignifi mobile app concept, including a clean splash 
          screen with logo branding, followed by Login and Signup pages. The goal was to explore 
          modern mobile authentication flows while maintaining visual consistency and intuitive user 
          experience.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <MagnifierImage src={cinfigi} alt="Cignifi Screen" zoom={2} size={180} />
        </div>
      </div>
    </div>
  );
}
