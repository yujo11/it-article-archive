import React from 'react';
import Chip, { ChipProps } from './Chip';

export default {
  title: 'shared/Chip',
  component: Chip,
};

const Template = (args: ChipProps) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Javascript',
  bgColor: 'bg-green-300',
};
