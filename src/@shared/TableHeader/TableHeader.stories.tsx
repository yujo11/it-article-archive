import React from 'react';
import TableHeader, { TableHeaderProps } from './TableHeader';

export default {
  title: 'shared/TableHeader',
  component: TableHeader,
};

const Template = (args: TableHeaderProps) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['No', 'Title', 'Summary', 'Date', 'Tags'],
};
