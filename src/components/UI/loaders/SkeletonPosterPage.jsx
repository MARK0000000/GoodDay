import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonPosterPage = () => (
  <ContentLoader
    speed={2}
    height={1000}
    width='100%'
    className={classes.businessPage}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* first line */}
    <rect x="0" y="0" rx="6" ry='6' width='40%' height='2.5%' />
    <rect x="0" y="3%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="82%" y="0" rx="6" ry='6' width='5%' height='4%' />
    <rect x="89%" y="0" rx="6" ry='6' width='5%' height='4%' />
    <rect x="95%" y="0" rx="6" ry='6' width='5%' height='4%' />
    <rect x="0" y="6%" rx="6" ry='6' width='50%' height='2.5%' />
    
    {/* img */}
    <rect x="0" y="9%" rx="6" ry='6' width='67%' height='28%' />

    {/* widget right top */}
    <rect x="72%" y="9%" rx="6" ry='6' width='10%' height='2%' />

    <rect x="72%" y="12%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="12%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="14%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="72%" y="16%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="16%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="18%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="72%" y="20%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="20%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="22%" rx="6" ry='6' width='4%' height='1%' />


    {/* widget right bottom */}
    <rect x="72%" y="28%" rx="6" ry='6' width='10%' height='2%' />

    <rect x="72%" y="31%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="77%" y="31%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="82%" y="31%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="87%" y="31%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="92%" y="31%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="97%" y="31%" rx="6" ry='6' width='3%' height='4%' />

    <rect x="72%" y="38%" rx="6" ry='6' width='20%' height='2.5%' />

    {/* widget-info */}
    <rect x="0" y="40%" rx="6" ry='6' width='5%' height='2%' />
    <rect x="8%" y="40%" rx="6" ry='6' width='5%' height='2%' />
    <rect x="0" y="43%" rx="6" ry='6' width='60%' height='1.5%' />

  </ContentLoader>
);