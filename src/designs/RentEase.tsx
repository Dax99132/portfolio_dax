import React from 'react';
import MagnifierImage from "../components/MagnifierImage";

import rentease1 from './rentease-1.png';
import rentease2 from './rentease-2.png';
import rentease3 from './rentease-3.png';
import rentease4 from './rentease-4.png';
import rentease5 from './rentease-5.png';

export default function RentEase() {
  return (
    <div 
      className="text-black min-h-screen py-20 px-6"
      style={{
        backgroundColor: "white",
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px"  // adjust spacing between lines
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Rent Ease – Mobile App UI</h1>
        <p className="mb-8 text-lg">
          Rent Ease is a versatile mobile application that allows users to rent
          or sell a variety of items, including electronics, furniture, kids'
          products, cars, real estate, sports products, etc. It features a clean,
          intuitive interface that streamlines the process of listing, browsing,
          and connecting with other users.
          <br /><br />
          Developed using Android Studio and Firebase, this project showcases my
          capabilities in UI/UX design, mobile app development, and logo design,
          highlighting a strong focus on usability and visual branding. The app
          supports category-based navigation, item previews, and seamless user
          interaction, offering a complete solution for modern renting and
          selling needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <MagnifierImage src={rentease1} alt="Screen 1" zoom={2} size={180} />
          <MagnifierImage src={rentease2} alt="Screen 2" zoom={2} size={180} />
          <MagnifierImage src={rentease3} alt="Screen 3" zoom={2} size={180} />
          <MagnifierImage src={rentease4} alt="Screen 4" zoom={2} size={180} />

          {/* Last rotated image with magnifier */}
          <div className="md:col-span-2 md:row-span-2 ml-28 -mt-24">
            <MagnifierImage
              src={rentease5}
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
