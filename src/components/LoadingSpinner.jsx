import React from "react";

const LoadingSpinner = () => {
  return (
    <div data-theme="light">
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner flex loading-lg" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
