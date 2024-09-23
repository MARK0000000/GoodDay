import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonServicePageMedia = () => (
  <ContentLoader
    speed={2}
    height={1300}
    width='100%'
    className={classes.servicePageMedia}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* content */}
    <rect x="0" y="0" rx="25" ry='25' width='100%' height='20%' />
    
    <rect x="20" y="23%" rx="6" ry='6' width='80' height='80' />
    <rect x="110" y="24%" rx="6" ry='6' width='30%' height='2%' />
    <rect x="110" y="26.5%" rx="6" ry='6' width='30%' height='1.5%' />
    <rect x="20" y="30%" rx="6" ry='6' width='30%' height='1.5%' />
    <rect x="20" y="32%" rx="6" ry='6' width='30%' height='1.5%' />

    <rect x="20" y="35%" rx="50%" ry='50%' width='30' height='30' />
    <rect x="60" y="35%" rx="50%" ry='50%' width='30' height='30' />

    <rect x="55%" y="37%" rx="50%" ry='50%' width='50' height='50' />
    <rect x="72%" y="37%" rx="20" ry='20' width='25%' height='50' />


    {/* info */}
    <rect x="0" y="43%" rx="6" ry='6' width='20%' height='3%' />
    <rect x="0" y="47%" rx="6" ry='6' width='100%' height='5%' />

    <rect x="0" y="54%" rx="6" ry='6' width='20%' height='3%' />
    <rect x="0" y="58%" rx="6" ry='6' width='100%' height='150' />


    {/* service */}
    <rect x="0%" y="72%" rx="6" ry='6' width='20%' height='3%' />
    <rect x="0%" y="76%" rx="6" ry='6' width='50' height='50' />
    <rect x="60" y="76.5%" rx="6" ry='6' width='30%' height='1%' />
    <rect x="60" y="78%" rx="6" ry='6' width='30%' height='1%' />
    <rect x="0" y="82%" rx="6" ry='6' width='15%' height='1.5%' />
    <rect x="20%" y="82%" rx="6" ry='6' width='15%' height='1.5%' />
    <rect x="50%" y="81%" rx="20" ry='20' width='50%' height='3%' />

    <rect x="0%" y="85%" rx="6" ry='6' width='50' height='50' />
    <rect x="60" y="85.5%" rx="6" ry='6' width='30%' height='1%' />
    <rect x="60" y="87%" rx="6" ry='6' width='30%' height='1%' />
    <rect x="0" y="91%" rx="6" ry='6' width='15%' height='1.5%' />
    <rect x="20%" y="91%" rx="6" ry='6' width='15%' height='1.5%' />
    <rect x="50%" y="90%" rx="20" ry='20' width='50%' height='3%' />



  </ContentLoader>
);