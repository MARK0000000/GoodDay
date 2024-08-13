import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonContentServices = () => (
  <ContentLoader
    speed={2}
    width={328}
    height={165}
    //viewBox="0 0 320 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="10" y="10" rx="20" ry='20' width='80' height='80' />

    <rect x="100" y="15" rx="6" ry='6' width='100' height='20' />
    <rect x="100" y="55" rx="6" ry='6' width='100' height='20' />

    <rect x="185" y="120" rx="6" ry='6' width='133' height='35' />

  </ContentLoader>
);
