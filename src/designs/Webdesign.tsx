import React from 'react';

import Webdesign1 from './Webdesign-1.png';
import Webdesign2 from './Webdesign-2.png';
import Webdesign3 from './Webdesign-3.png';
import Webdesign4 from './Webdesign-4.png';



export default function Webdesign() {
  return (
    <div className="bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Website Designs</h1>
        <p className="mb-8 text-lg">
        Made Website Designs for a business like GYM, SHOES STORE, FITNESS TRACKING, AIRPORT TIMINGS . This Designs where made to learn UI/UX , for best shape , placing , design , colour theory , scalling etc.  
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <img src={Webdesign1} alt="Screen 1" className="rounded-lg shadow-lg" />
          <img src={Webdesign2} alt="Screen 2" className="rounded-lg shadow-lg" />
          <img src={Webdesign3} alt="Screen 3" className="rounded-lg shadow-lg" />
          <img src={Webdesign4} alt="Screen 4" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
