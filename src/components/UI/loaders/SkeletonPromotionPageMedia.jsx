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
    {/* widget-info */}
    <rect x="0" y="40%" rx="6" ry='6' width='5%' height='2%' />
    <rect x="8%" y="40%" rx="6" ry='6' width='5%' height='2%' />
    <rect x="16%" y="40%" rx="6" ry='6' width='5%' height='2%' />
    <rect x="0" y="43%" rx="6" ry='6' width='60%' height='1.5%' />


    {/* widget right top */}
    <rect x="0" y="47%" rx="6" ry='6' width='10%' height='20' />

    <rect x="0" y="50%" rx="6" ry='6' width='30px' height='30px' />
    <rect x="10%" y="50%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="10%" y="52%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="0" y="54%" rx="6" ry='6' width='30px' height='30px' />
    <rect x="10%" y="54%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="10%" y="56%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="0" y="58%" rx="6" ry='6' width='30px' height='30px' />
    <rect x="10%" y="58%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="10%" y="60%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="0" y="62%" rx="6" ry='6' width='30px' height='30px' />
    <rect x="10%" y="62%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="10%" y="64%" rx="6" ry='6' width='4%' height='1%' />

    {/* widget right bottom */}
    <rect x="0" y="67%" rx="6" ry='6' width='10%' height='2%' />

    <rect x="00" y="70%" rx="6" ry='6' width='30' height='30' />
    <rect x="0" y="70%" rx="6" ry='6' width='30' height='30' />
    <rect x="40" y="70%" rx="6" ry='6' width='30' height='30' />
    <rect x="80" y="70%" rx="6" ry='6' width='30' height='30' />
    <rect x="120" y="70%" rx="6" ry='6' width='30' height='30' />
    <rect x="170" y="70%" rx="6" ry='6' width='30' height='30' />

    <rect x="80%" y="70%" rx="6" ry='6' width='20%' height='40' />

    {/* first widget */}
    <rect x="0" y="76%" rx="6" ry='6' width='20%' height='20' />

    <rect x="0" y="79%" rx="6" ry='6' width='10%' height='16' />
    <rect x="0" y="81%" rx="6" ry='6' width='10%' height='16' />

    <rect x="16%" y="79%" rx="6" ry='6' width='10%' height='16' />
    <rect x="16%" y="81%" rx="6" ry='6' width='10%' height='16' />

    <rect x="31%" y="79%" rx="6" ry='6' width='10%' height='16' />
    <rect x="31%" y="81%" rx="6" ry='6' width='10%' height='16' />

    <rect x="0" y="83%" rx="6" ry='6' width='30%' height='20' />




  </ContentLoader>
);