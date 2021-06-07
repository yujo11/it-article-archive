import React from 'react';
import TableBody from './@shared/TableBody';
import TableHeader from './@shared/TableHeader';

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

const App = (): JSX.Element => {
  return (
    <div className="p-10 min-h-screen bg-gray-50">
      <header className="mb-6">
        <h1 className="mb-1 text-3xl font-semibold">📚 it-article-archive</h1>
        <span className="text-ms ml-1 font-light">읽은 기술 아티클을 아카이빙합니다.</span>
      </header>
      <div className="bg-white shadow-lg">
        <table className="w-full text-center">
          <TableHeader items={tableHeaderItems} />
          <TableBody items={tableBodyItems} />
        </table>
      </div>
    </div>
  );
};

export default App;
