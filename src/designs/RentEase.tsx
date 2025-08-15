import React from 'react';

import rentease1 from './rentease-1.png';
import rentease2 from './rentease-2.png';
import rentease3 from './rentease-3.png';
import rentease4 from './rentease-4.png';
import rentease5 from './rentease-5.png';


export default function RentEase() {
  return (
    <div className="bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Rent Ease – Mobile App UI</h1>
        <p className="mb-8 text-lg">
        Rent Ease is a versatile mobile application that allows users to rent or sell a variety of items, including electronics, furniture, kids' products, cars, real estate, Sports products etc . It features a clean, intuitive interface that streamlines the process of listing, browsing, and connecting with other users.

        Developed using Android Studio and Firebase, this project showcases my capabilities in UI/UX design, mobile app development, and logo design, highlighting a strong focus on usability and visual branding. The app supports category-based navigation, item previews, and seamless user interaction offering a complete solution for modern renting and selling needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <img src={rentease1} alt="Screen 1" className="rounded-lg shadow-lg" />
          <img src={rentease2} alt="Screen 2" className="rounded-lg shadow-lg" />
          <img src={rentease3} alt="Screen 3" className="rounded-lg shadow-lg" />
          <img src={rentease4} alt="Screen 4" className="rounded-lg shadow-lg" />
          {/* Rotate and adjust the last image */}
          <img
            src={rentease5}
            alt="Screen 5"
            className="rounded-lg shadow-lg -rotate-90 md:col-span-2 md:row-span-2 ml-28 -mt-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
