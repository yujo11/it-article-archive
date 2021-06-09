import React from 'react';

export interface ChipProps {
  text: string;
  bgColor: string;
}

const Chip = ({ text, bgColor }: ChipProps): JSX.Element => {
  return (
    <div className={`rounded-lg ring-green-200 ring-2 ${bgColor}`}>
      <span>{text}</span>
    </div>
  );
};

export default Chip;
