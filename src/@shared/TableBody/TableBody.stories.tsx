import React from 'react';
import TableBody, { TableBodyProps } from './TableBody';

export default {
  title: 'shared/TableBody',
  component: TableBody,
};

const Template = (args: TableBodyProps) => <TableBody {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
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
  ],
};
