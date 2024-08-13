import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonContent = () => (
  <ContentLoader
    speed={2}
    width={316}
    height={523}
    //viewBox="0 0 320 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="20" ry='20' width='316' height='220' />
    <rect x="15" y="245" rx="6" ry='6' width='250' height='30' />
    <rect x="15" y="280" rx="6" ry='6' width='200' height='21' />
    <rect x="15" y="321" rx="6" ry='6' width='200' height='19' />
    <rect x="15" y="345" rx="6" ry='6' width='200' height='19' />
    <rect x="15" y="384" rx="6" ry='6' width='200' height='21' />
    <rect x="15" y="410" rx="6" ry='6' width='200' height='21' />
    <rect x="205" y="470" rx="6" ry='6' width='96' height='36' />
  </ContentLoader>
);
