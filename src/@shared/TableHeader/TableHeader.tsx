import React from 'react';

export interface TableHeaderProps {
  items: string[];
  className?: string;
}

const TableHeader = ({ items, className = '' }: TableHeaderProps): JSX.Element => {
  return (
    <thead className={`text-lg border-b border-gray-300 ${className}`}>
      <tr>
        {items?.map((item, index) => (
          <th key={index} className="px-2 py-1">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
