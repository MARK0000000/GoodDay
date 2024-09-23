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
    <rect x="0" y="0" rx="25" ry='25' width='40%' height='34%' />
    <rect x="45%" y="2.5%" rx="6" ry='6' width='8%' height='8%' />
    <rect x="55%" y="4%" rx="6" ry='6' width='8%' height='2%' />
    <rect x="55%" y="7%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="45%" y="13%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="45%" y="16%" rx="6" ry='6' width='20%' height='1.5%' />

    <rect x="45%" y="20%" rx="50%" ry='50%' width='3%' height='3%' />
    <rect x="52%" y="20%" rx="50%" ry='50%' width='3%' height='3%' />
    <rect x="70%" y="25.5%" rx="50%" ry='50%' width='5.5%' height='5.5%' />
    <rect x="80%" y="25.5%" rx="20" ry='20' width='17.5%' height='5.5%' />


    {/* info */}
    <rect x="0%" y="39%" rx="6" ry='6' width='8%' height='3%' />
    <rect x="0%" y="45%" rx="6" ry='6' width='30%' height='5%' />
    <rect x="55%" y="39%" rx="6" ry='6' width='8%' height='3%' />
    <rect x="55%" y="45%" rx="6" ry='6' width='430' height='150' />


    {/* service */}
    <rect x="0%" y="65%" rx="6" ry='6' width='8%' height='3%' />

    <rect x="0%" y="71%" rx="6" ry='6' width='5%' height='5%' />
    <rect x="6%" y="71.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="6%" y="74%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="83%" y="71.5%" rx="20" ry='20' width='17%' height='4%' />
    <rect x="45%" y="72.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="65%" y="72.5%" rx="6" ry='6' width='8%' height='1.5%' />

    <rect x="0%" y="77%" rx="6" ry='6' width='5%' height='5%' />
    <rect x="6%" y="77.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="6%" y="80%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="83%" y="77.5%" rx="20" ry='20' width='17%' height='4%' />
    <rect x="45%" y="78.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="65%" y="78.5%" rx="6" ry='6' width='8%' height='1.5%' />

    <rect x="0%" y="83%" rx="6" ry='6' width='5%' height='5%' />
    <rect x="6%" y="83.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="6%" y="86%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="83%" y="83.5%" rx="20" ry='20' width='17%' height='4%' />
    <rect x="45%" y="84.5%" rx="6" ry='6' width='8%' height='1.5%' />
    <rect x="65%" y="84.5%" rx="6" ry='6' width='8%' height='1.5%' />







  </ContentLoader>
);