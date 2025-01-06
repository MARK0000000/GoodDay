import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonPromotionPageMedia = () => (
  <ContentLoader
    speed={2}
    height={970}
    width='100%'
    className={classes.businessPageMedia}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* first line */}
    <rect x="0" y="0" rx="6" ry='6' width='215' height='21' />
    <rect x="0" y="3%" rx="6" ry='6' width='120' height='16' />
    <rect x="80%" y="0" rx="6" ry='6' width='20%' height='40' />
    <rect x="0" y="6%" rx="6" ry='6' width='50%' height='16' />

    {/* img */}
    <rect x="0" y="9%" rx="6" ry='6' width='100%' height='30%' />
    {/* first widget */}
    <rect x="0" y="40%" rx="6" ry='6' width='20%' height='20' />

    <rect x="0" y="43%" rx="6" ry='6' width='10%' height='16' />
    <rect x="0" y="45%" rx="6" ry='6' width='10%' height='16' />

    <rect x="0" y="48%" rx="6" ry='6' width='10%' height='16' />
    <rect x="0" y="50%" rx="6" ry='6' width='10%' height='16' />

    <rect x="0" y="53%" rx="6" ry='6' width='30%' height='20' />


    {/* widget right top */}
    <rect x="0" y="57%" rx="6" ry='6' width='20%' height='20' />

    <rect x="0" y="60%" rx="6" ry='6' width='30px' height='30px' />
    <rect x="10%" y="60%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="10%" y="62%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="0" y="65%" rx="6" ry='6' width='30px' height='30px' />
    <rect x="10%" y="65%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="10%" y="67%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="0" y="70%" rx="6" ry='6' width='30px' height='30px' />
    <rect x="10%" y="70%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="10%" y="72%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="0" y="75%" rx="6" ry='6' width='30px' height='30px' />
    <rect x="10%" y="75%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="10%" y="77%" rx="6" ry='6' width='4%' height='1%' />

    {/* widget right bottom */}
    <rect x="0" y="81%" rx="6" ry='6' width='10%' height='2%' />

    <rect x="00" y="84%" rx="6" ry='6' width='30' height='30' />
    <rect x="0" y="84%" rx="6" ry='6' width='30' height='30' />
    <rect x="40" y="84%" rx="6" ry='6' width='30' height='30' />
    <rect x="80" y="84%" rx="6" ry='6' width='30' height='30' />
    <rect x="120" y="84%" rx="6" ry='6' width='30' height='30' />
    <rect x="170" y="84%" rx="6" ry='6' width='30' height='30' />

    <rect x="80%" y="84%" rx="6" ry='6' width='20%' height='40' />





  </ContentLoader>
);