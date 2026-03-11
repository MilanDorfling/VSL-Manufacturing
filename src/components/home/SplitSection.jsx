import React from 'react';

const SplitSection = ({ left, right, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 gap-6 lg:grid-cols-2 ${className}`.trim()}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default SplitSection;
