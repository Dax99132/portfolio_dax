import React from 'react';
import MagnifierImage from "../components/MagnifierImage";

import Prototype1 from './Prototype-1.png';
import Prototype2 from './Prototype-2.png';
import Prototype3 from './Prototype-3.png';
import Prototype4 from './Prototype-4.png';

export default function Prototype() {
  return (
    <div className="bg-grid text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Webdesign - Prototype Design</h1>
        <p className="mb-8 text-lg">
          This is a web design called Snapshot made to learn best visual web design and wireframing, 
          to show prototyping by this design.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <MagnifierImage src={Prototype1} alt="Screen 1" zoom={2} size={180} />
          <MagnifierImage src={Prototype2} alt="Screen 2" zoom={2} size={180} />
          <MagnifierImage src={Prototype3} alt="Screen 3" zoom={2} size={180} />
          <MagnifierImage src={Prototype4} alt="Screen 4" zoom={2} size={180} />
        </div>
      </div>
    </div>
  );
}
