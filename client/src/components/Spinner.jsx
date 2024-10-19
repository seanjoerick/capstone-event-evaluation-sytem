import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-700"></div>
    </div>
  );
};

export default Spinner;