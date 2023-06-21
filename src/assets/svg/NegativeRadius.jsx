import React, { useEffect, useState } from 'react';

const NegativeRadius = ({ value, color, angle, className }) => {
  const [direction, setDirection] = useState(
    'M11.001 11V11C5.50976 9.77973 1.22125 5.49121 0.000976563 0V0L0.000976562 11L11.001 11Z'
  );

  useEffect(() => {
    if (angle === 'top')
      setDirection('M0 11V11C1.22027 5.50879 5.50879 1.22027 11 0V0L0 0L0 11Z');
    if (angle === 'right')
      setDirection('M0 0V0C5.49121 1.22027 9.77973 5.50879 11 11V11L11 0L0 0Z');
    if (angle === 'bottom')
      setDirection(
        'M11.001 0V0C9.78071 5.49121 5.49219 9.77973 0.000976562 11V11L11.001 11L11.001 0Z'
      );
    if (angle === 'left')
      setDirection('M0 0V0C1.22027 5.49121 5.50879 9.77973 11 11V11H0V0Z');
  });

  return (
    <svg
      width={value}
      height={value}
      className={className}
      viewBox='0 0 11 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d={direction}
        fill={color}
      />
    </svg>
  );
};

export default NegativeRadius;
