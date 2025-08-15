import React from 'react';

import ERP1 from './ERP-1.png';
import ERP2 from './ERP-2.png';
import ERP3 from './ERP-3.png';


export default function ERP() {
  return (
    <div className="bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Enterprise Resource Planning - Mobile App UI</h1>
        <p className="mb-8 text-lg">
         As part of UI design learning, I created a mobile UI concept for an ERP system. The set includes a
         branded logo splash screen, a simple login interface, and a functional dashboard (home page).
         The design focuses on clarity, usability, and clean structure for business-oriented mobile apps.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <img src={ERP1} alt="Screen 1" className="rounded-lg shadow-lg" />
          <img src={ERP2} alt="Screen 2" className="rounded-lg shadow-lg" />
          <img src={ERP3} alt="Screen 3" className="rounded-lg shadow-lg" />
          
        </div>
      </div>
    </div>
  );
}
