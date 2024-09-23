import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonContent = () => (
  <ContentLoader
    speed={2}
    height={502}
    className={classes.contentLoader}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="20" ry='20' width='100%' height='42%' />
    <rect x="15" y="47%" rx="6" ry='6' width='80%' height='6%' />
    <rect x="15" y="54%" rx="6" ry='6' width='60%' height='4%' />
    <rect x="15" y="61%" rx="6" ry='6' width='60%' height='4%' />
    <rect x="15" y="66%" rx="6" ry='6' width='60%' height='4%' />
    <rect x="15" y="73%" rx="6" ry='6' width='60%' height='4%' />
    <rect x="50%" y="85%" rx="6" ry='6' width='40%' height='7%' />
  </ContentLoader>
);
