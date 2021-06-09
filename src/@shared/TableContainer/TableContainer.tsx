import React from 'react';

export interface TableContainerProps {
  children: JSX.Element | JSX.Element[];
}

const TableContainer = ({ children }: TableContainerProps): JSX.Element => {
  return (
    <div className="bg-white shadow-lg">
      <table className="w-full text-center">{children}</table>
    </div>
  );
};

export default TableContainer;
