// components/WaterBottleProgress.js
import React from 'react';

const WaterBottleProgress = ({ progressPercentage }) => {
  const bottleHeight = 300;
  const capHeight = 28;
  const fillableHeight = bottleHeight - capHeight;
  const visualWaterHeight = Math.min(progressPercentage, 100) * (fillableHeight / 100);

  const waterGradient = 'linear-gradient(to top, #4facfe 0%, #00f2fe 100%)';

  return (
    <div className="w-24 mr-4 flex flex-col items-center">
      <div className="relative w-full border-4 border-gray-800 rounded-lg" style={{ height: `${bottleHeight}px` }}>
        <div className="absolute top-0 left-0 right-0 h-5 bg-gray-800 rounded-t-md"></div>
        <div className="relative w-full h-full pt-5">
        <div className="absolute bottom-0 w-full" style={{ height: `${visualWaterHeight}px`, background: waterGradient }}>
          </div>
        </div>
      </div>
      <div className={`mt-2 text-center font-bold ${progressPercentage > 100 ? 'text-green-500' : 'text-gray-800'}`}>
        {progressPercentage.toFixed(0)}%
      </div>
    </div>
  );
};

export default WaterBottleProgress;
