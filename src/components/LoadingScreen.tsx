
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-scale-pulse mb-4">
          <img 
            src="/images/logo.png" 
            alt="Aditya Horizon Logo" 
            className="w-20 h-20 mx-auto"
          />
        </div>
        <div className="animate-logo-bounce">
          <h1 className="text-2xl font-bold text-slate-800">Aditya Horizon</h1>
          <p className="text-orange-600 text-sm">International LLP</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
