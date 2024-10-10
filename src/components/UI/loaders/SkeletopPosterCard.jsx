import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonPosterCard = () => (
  <ContentLoader
    speed={2}
    height={400}
    width='100%'
    className={classes.posterCard}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* content */}
    <rect x="0" y="0" rx="25" ry='25' width='100%' height='280' />

    <rect x="0" y="290" rx="6" ry='6' width='50%' height='20' />
    <rect x="0" y="320" rx="6" ry='6' width='40%' height='16' />
    <rect x="0" y="345" rx="6" ry='6' width='40%' height='16' />

  </ContentLoader>
);