import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';
import { SkeletonPosterCard } from './SkeletopPosterCard';
export const SkeletonPosterCategory = () => (
  <ContentLoader
    speed={2}

    width='100%'
    className={classes.posterCategory}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="20" rx="25" ry='25' width='30%' height='30' />

    <div className='postersCategory__content'>
      <SkeletonPosterCard />
      <SkeletonPosterCard />
      <SkeletonPosterCard />
      <SkeletonPosterCard />
      <SkeletonPosterCard />
      <SkeletonPosterCard />
    </div>
  </ContentLoader>
);