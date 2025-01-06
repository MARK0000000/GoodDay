import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonContentServices = () => (
  <ContentLoader
    speed={2}
    width="100%" 
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={classes.skeletonContentService}
  >
    <rect x="10" y="10" rx="20" ry="20" width="calc(100% - 20px)" height="50%" />   

    <rect x="10" y="60%" rx="6" ry="6" width="40%" height="5%" />
    <rect x="10" y="70%" rx="6" ry="6" width="40%" height="5%" />

    <rect x="30%" y="85%" rx="6" ry="6" width="40%" height="10%" />
  </ContentLoader>
);