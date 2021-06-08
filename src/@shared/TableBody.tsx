import React from 'react';
import { TableBodyItem } from '~/types';
import Chip from './Chip';

interface Props {
  items: TableBodyItem[];
  className?: string;
}

const TableBody = ({ items, className = '' }: Props): JSX.Element => {
  return (
    <tbody className={`${className}`}>
      {items.map((item, index) => (
        <tr key={index} className="border-b border-gray-300">
          <td className="px-2 py-1">{index + 1}</td>
          <td className="px-2 py-1">{item.title}</td>
          <td className="px-2 py-1 text-left">{item.summary}</td>
          <td className="px-2 py-1">{item.date}</td>
          {item.tags.map((tag, index) => (
            <td key={index} className="flex px-2 py-1">
              <Chip text={tag} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
