

import React, { useState } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState('bg-white');

  return (
    <div className={`fixed inset-0 ${bgColor} flex flex-col items-center justify-center transition-colors duration-300`}>
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Background Color Changer</h1>

        <p className="mb-4 text-center">Click a button to change the background color</p>

        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setBgColor('bg-red-500')}
            className="px-4 py-2 rounded-md bg-red-500 text-black font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'red' }}          
          >
            Red
          </button>

          <button
            onClick={() => setBgColor('bg-blue-500')}
            className="px-4 py-2 rounded-md bg-blue-500 text-black font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'blue' }}          
          >
            Blue
          </button>

          <button
            onClick={() => setBgColor('bg-green-500')}
            className="px-4 py-2 rounded-md bg-green-500 text-black font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'green' }}          >
            Green
          </button>

          <button
            onClick={() => setBgColor('bg-yellow-400')}
            className="px-4 py-2 rounded-md bg-yellow-400 text-black font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'yellow' }}          
          >
            Yellow
          </button>

          <button
            onClick={() => setBgColor('bg-purple-500')}
            className="px-4 py-2 rounded-md bg-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'purple' }}          
          >
            Purple
          </button>

          <button
            onClick={() => setBgColor('bg-white')}
            className="px-4 py-2 rounded-md bg-gray-200 text-black font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'white' }}          
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
