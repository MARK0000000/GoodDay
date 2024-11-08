import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonServicePage = () => (
  <ContentLoader
    speed={2}
    height={1000}
    width='100%'
    className={classes.servicePage}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* content */}
    <rect x="0" y="0" rx="25" ry='25' width='20%' height='34%' />

    <rect x="25%" y="2.5%" rx="6" ry='6' width='16%' height='8%' />
    <rect x="43%" y="4%" rx="6" ry='6' width='8%' height='2%' />
    <rect x="43%" y="7%" rx="6" ry='6' width='8%' height='1.5%' />

    <rect x="25%" y="13%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="25%" y="16%" rx="6" ry='6' width='20%' height='1.5%' />

    <rect x="25%" y="20%" rx="50%" ry='50%' width='3%' height='3%' />
    <rect x="32%" y="20%" rx="50%" ry='50%' width='3%' height='3%' />
    <rect x="70%" y="25.5%" rx="50%" ry='50%' width='5.5%' height='5.5%' />
    <rect x="80%" y="25.5%" rx="20" ry='20' width='17.5%' height='5.5%' />


    {/* info */}
    {/* <rect x="0%" y="39%" rx="6" ry='6' width='8%' height='3%' />
    <rect x="0%" y="45%" rx="6" ry='6' width='30%' height='5%' />
    <rect x="55%" y="39%" rx="6" ry='6' width='8%' height='3%' />
    <rect x="55%" y="45%" rx="6" ry='6' width='430' height='150' /> */}


    {/* service */}
    <rect x="0%" y="39%" rx="6" ry='6' width='8%' height='3%' />

    <rect x="0%" y="45%" rx="6" ry='6' width='5%' height='5%' />
    <rect x="6%" y="45.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="6%" y="48%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="83%" y="45.5%" rx="20" ry='20' width='17%' height='4%' />
    <rect x="45%" y="46.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="65%" y="46.5%" rx="6" ry='6' width='8%' height='1.5%' />

    <rect x="0%" y="51%" rx="6" ry='6' width='5%' height='5%' />
    <rect x="6%" y="51.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="6%" y="54%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="83%" y="51.5%" rx="20" ry='20' width='17%' height='4%' />
    <rect x="45%" y="52.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="65%" y="52.5%" rx="6" ry='6' width='8%' height='1.5%' />

    <rect x="0%" y="57%" rx="6" ry='6' width='5%' height='5%' />
    <rect x="6%" y="57.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="6%" y="60%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="83%" y="57.5%" rx="20" ry='20' width='17%' height='4%' />
    <rect x="45%" y="58.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="65%" y="58.5%" rx="6" ry='6' width='8%' height='1.5%' />







  </ContentLoader>
);