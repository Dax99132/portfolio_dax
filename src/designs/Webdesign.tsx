import React from 'react';
import MagnifierImage from "../components/MagnifierImage";

import Webdesign1 from './Webdesign-1.png';
import Webdesign2 from './Webdesign-2.png';
import Webdesign3 from './Webdesign-3.png';
import Webdesign4 from './Webdesign-4.png';

export default function Webdesign() {
  return (
    <div 
      className="text-black min-h-screen py-20 px-6"
      style={{
        backgroundColor: "white",
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px"
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Website Designs</h1>
        <p className="mb-8 text-lg">
          Made Website Designs for a business like GYM, SHOES STORE, FITNESS TRACKING, AIRPORT TIMINGS.
          This Designs where made to learn UI/UX , for best shape , placing , design , colour theory , scalling etc.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <MagnifierImage src={Webdesign1} alt="Screen 1" zoom={2} size={180} />
          <MagnifierImage src={Webdesign2} alt="Screen 2" zoom={2} size={180} />
          <MagnifierImage src={Webdesign3} alt="Screen 3" zoom={2} size={180} />
          <MagnifierImage src={Webdesign4} alt="Screen 4" zoom={2} size={180} />
        </div>
      </div>
    </div>
  );
}
