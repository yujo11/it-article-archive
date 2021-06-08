import React from 'react';

export interface ChipProps {
  text: string;
}

const Chip = ({ text }: ChipProps): JSX.Element => {
  return (
    <div className="bg-green-200 rounded-lg ring-green-200 ring">
      <span>{text}</span>
    </div>
  );
};

export default Chip;
