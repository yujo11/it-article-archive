import React from 'react';
import { TableBodyItem } from '~/types';

interface Props {
  items: TableBodyItem[];
  className?: string;
}

const TableBody = ({ items, className = '' }: Props): JSX.Element => {
  return (
    <tbody className={`border-b border-gray-300 ${className}`}>
      {items.map((item, index) => (
        <tr key={index}>
          <td className="px-2 py-1">{index + 1}</td>
          <td className="px-2 py-1">{item.title}</td>
          <td className="px-2 py-1">{item.summary}</td>
          <td className="px-2 py-1">{item.date}</td>
          <td className="px-2 py-1">{item.tags.join(', ')}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
