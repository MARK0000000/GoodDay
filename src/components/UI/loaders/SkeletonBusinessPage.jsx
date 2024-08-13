import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonBusinessPage = () => (
  <ContentLoader
    speed={2}
    width={1024}
    height={1200}
    //viewBox="0 0 320 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    {/* first line */}
    <rect x="0" y="0" rx="6" ry='6' width='400' height='27' />
    <rect x="0" y="32" rx="6" ry='6' width='200' height='19' />
    <rect x="694" y="0" rx="6" ry='6' width='50' height='50' />
    <rect x="754" y="0" rx="6" ry='6' width='50' height='50' />
    <rect x="814" y="0" rx="6" ry='6' width='50' height='50' />
    <rect x="874" y="0" rx="6" ry='6' width='150' height='50' />
    <rect x="0" y="70" rx="6" ry='6' width='500' height='30' />
    {/* img */}
    <rect x="0" y="120" rx="6" ry='6' width='1024' height='600' />

    {/* first widget */}
    <rect x="15" y="755" rx="6" ry='6' width='200' height='21' />

    <rect x="15" y="795" rx="6" ry='6' width='100' height='19' />
    <rect x="15" y="825" rx="6" ry='6' width='100' height='19' />
    <rect x="165" y="795" rx="6" ry='6' width='100' height='19' />
    <rect x="165" y="825" rx="6" ry='6' width='100' height='19' />
    <rect x="315" y="795" rx="6" ry='6' width='100' height='19' />
    <rect x="315" y="825" rx="6" ry='6' width='100' height='19' />

    <rect x="15" y="865" rx="6" ry='6' width='300' height='19' />

    {/* widget-info */}
    <rect x="0" y="920" rx="6" ry='6' width='50' height='25' />
    <rect x="80" y="920" rx="6" ry='6' width='50' height='25' />
    <rect x="160" y="920" rx="6" ry='6' width='50' height='25' />
    <rect x="0" y="975" rx="6" ry='6' width='600' height='20' />

    {/* widget right top */}
    <rect x="735" y="755" rx="6" ry='6' width='100' height='21' />

    <rect x="735" y="795" rx="6" ry='6' width='35' height='35' />
    <rect x="795" y="795" rx="6" ry='6' width='50' height='15' />
    <rect x="795" y="820" rx="6" ry='6' width='40' height='10' />

    <rect x="735" y="860" rx="6" ry='6' width='35' height='35' />
    <rect x="795" y="860" rx="6" ry='6' width='50' height='15' />
    <rect x="795" y="885" rx="6" ry='6' width='40' height='10' />

    <rect x="735" y="925" rx="6" ry='6' width='35' height='35' />
    <rect x="795" y="925" rx="6" ry='6' width='50' height='15' />
    <rect x="795" y="950" rx="6" ry='6' width='40' height='10' />

    <rect x="735" y="990" rx="6" ry='6' width='35' height='35' />
    <rect x="795" y="990" rx="6" ry='6' width='50' height='15' />
    <rect x="795" y="1015" rx="6" ry='6' width='40' height='10' />

    {/* widget right bottom */}
    <rect x="735" y="1075" rx="6" ry='6' width='100' height='21' />

    <rect x="735" y="1105" rx="6" ry='6' width='35' height='35' />
    <rect x="780" y="1105" rx="6" ry='6' width='35' height='35' />
    <rect x="825" y="1105" rx="6" ry='6' width='35' height='35' />
    <rect x="870" y="1105" rx="6" ry='6' width='35' height='35' />
    <rect x="915" y="1105" rx="6" ry='6' width='35' height='35' />
    <rect x="960" y="1105" rx="6" ry='6' width='35' height='35' />

    <rect x="735" y="1150" rx="6" ry='6' width='200' height='30' />
  </ContentLoader>
);
