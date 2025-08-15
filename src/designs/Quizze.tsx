import React from 'react';

import Quizze1 from './Quizze-1.png';
import Quizze2 from './Quizze-2.png';
import Quizze3 from './Quizze-3.png';
import Quizze4 from './Quizze-4.png';
import Quizze5 from './Quizze-5.png';
import Quizze6 from './Quizze-6.png';
import Quizze7 from './Quizze-7.png';
import Quizze8 from './Quizze-8.png';
import Quizze9 from './Quizze-9.png';
import Quizze10 from './Quizze-10.png';
import Quizze11 from './Quizze-11.png';


export default function Quizze() {
  return (
    <div className="bg-white text-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Quizze - Fun & Interactive Quizze UI</h1>
        <p className="mb-8 text-lg">
        Quizze is a student-focused quiz application designed with a fun and engaging UI. The logo and interface incorporate playful elements like a question mark, bulb, pencil, and trophy to reflect curiosity, learning, and achievement. The design uses soft, eye-friendly colors to ensure a comfortable experience during extended use—ideal for both creators building quizzes and students attempting them. The overall layout balances visual appeal with clarity, making it intuitive and enjoyable for all users.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
        <img src={Quizze1 } alt="Screen 1" className="rounded-lg shadow-lg" />
        <img src={Quizze2 } alt="Screen 2" className="rounded-lg shadow-lg" />
        <img src={Quizze3 } alt="Screen 3" className="rounded-lg shadow-lg" />
        <img src={Quizze4 } alt="Screen 4" className="rounded-lg shadow-lg" />
        <img src={Quizze5 } alt="Screen 5" className="rounded-lg shadow-lg" />
        <img src={Quizze6 } alt="Screen 6" className="rounded-lg shadow-lg" />
        <img src={Quizze7 } alt="Screen 7" className="rounded-lg shadow-lg" />
        <img src={Quizze8 } alt="Screen 8" className="rounded-lg shadow-lg" />
        <img src={Quizze9 } alt="Screen 9" className="rounded-lg shadow-lg" />
        <img src={Quizze10} alt="Screen 10" className="rounded-lg shadow-lg" />
        <img src={Quizze11} alt="Screen 11" className="rounded-lg shadow-lg" />
          
          
        
        </div>
      </div>
    </div>
  );
}
