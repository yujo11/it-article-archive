import React, { Children } from 'react';
import TableBody from '../TableBody/TableBody';
import TableHeader from '../TableHeader/TableHeader';
import TableContainer from './TableContainer';

const tableHeaderItems = ['No', 'Title', 'Summary', 'Date', 'Tags'];

const tableBodyItems = [
  {
    title: 'JavaScript와 ECMAScript는 무슨 차이점이 있을까?',
    summary: `글에서는 ECMA와 ECMAScript를 설명하고, Javascript와 ES가 어떤 접점을 갖고 있는지 쉬운 예시를 들어 설명하고
  있습니다. 저처럼 평소에 별 생각 없이 ES6를 쓰고 계시거나, ECMA에 대해 평소 궁금했던 분들께 추천 드립니다!`,
    date: '2020-12-23',
    tags: ['JS', 'REACT'],
  },
  {
    title: 'JavaScript와 ECMAScript는 무슨 차이점이 있을까?',
    summary: `글에서는 ECMA와 ECMAScript를 설명하고, Javascript와 ES가 어떤 접점을 갖고 있는지 쉬운 예시를 들어 설명하고
  있습니다. 저처럼 평소에 별 생각 없이 ES6를 쓰고 계시거나, ECMA에 대해 평소 궁금했던 분들께 추천 드립니다!`,
    date: '2020-12-23',
    tags: ['JS', 'REACT'],
  },
  {
    title: 'JavaScript와 ECMAScript는 무슨 차이점이 있을까?',
    summary: `글에서는 ECMA와 ECMAScript를 설명하고, Javascript와 ES가 어떤 접점을 갖고 있는지 쉬운 예시를 들어 설명하고
  있습니다. 저처럼 평소에 별 생각 없이 ES6를 쓰고 계시거나, ECMA에 대해 평소 궁금했던 분들께 추천 드립니다!`,
    date: '2020-12-23',
    tags: ['JS', 'REACT'],
  },
  {
    title: 'JavaScript와 ECMAScript는 무슨 차이점이 있을까?',
    summary: `글에서는 ECMA와 ECMAScript를 설명하고, Javascript와 ES가 어떤 접점을 갖고 있는지 쉬운 예시를 들어 설명하고
  있습니다. 저처럼 평소에 별 생각 없이 ES6를 쓰고 계시거나, ECMA에 대해 평소 궁금했던 분들께 추천 드립니다!`,
    date: '2020-12-23',
    tags: ['JS', 'REACT'],
  },
];

export default {
  title: 'shared/TableContainer',
  component: TableContainer,
};

const Template = () => (
  <TableContainer>
    <TableHeader items={tableHeaderItems} />
    <TableBody items={tableBodyItems} />
  </TableContainer>
);

export const Default = Template.bind({});
