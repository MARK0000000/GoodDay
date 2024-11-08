import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonDiscountPageMedia = () => (
  <ContentLoader
    speed={2}
    height={2000}
    width='100%'
    className={classes.businessPageMedia}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* img */}
    <rect x="0" y="0" rx="6" ry='6' width='100%' height='33%' />
    {/* content */}
    <rect x="0" y="34%" rx="6" ry='6' width='30%' height='32' />
    <rect x="0" y="36%" rx="6" ry='6' width='50%' height='20' />
    <rect x="0" y="38.5%" rx="6" ry='6' width='20%' height='26' />
    <rect x="0" y="40.5%" rx="6" ry='6' width='60%' height='20' />

    <rect x="35%" y="42.5%" rx="6" ry='6' width='15%' height='3%' />
    <rect x="57%" y="42.5%" rx="6" ry='6' width='15%' height='3%' />
    <rect x="79%" y="42.5%" rx="6" ry='6' width='15%' height='3%' />



    <rect x="1.5%" y="47%" rx="6" ry='6' width='30%' height='2%' />
    <rect x="1.5%" y="50%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="1.5%" y="52%" rx="6" ry='6' width='40%' height='1.5%' />

    <rect x="1.5%" y="55%" rx="6" ry='6' width='30%' height='2%' />

    <rect x="1.5%" y="58%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="1.5%" y="60%" rx="6" ry='6' width='60%' height='1.5%' />

    <rect x="1.5%" y="62%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="1.5%" y="64%" rx="6" ry='6' width='60%' height='1.5%' />

    <rect x="50%" y="67%" rx="6" ry='6' width='50%' height='2%' />



    <rect x="0" y="70%" rx="6" ry='6' width='40%' height='1.5%' />

    <rect x="0" y="72%" rx="6" ry='6' width='15%' height='3%' />
    <rect x="20%" y="72%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="20%" y="74%" rx="6" ry='6' width='15%' height='1%' />

    <rect x="0" y="76%" rx="6" ry='6' width='15%' height='3%' />
    <rect x="20%" y="76%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="20%" y="78%" rx="6" ry='6' width='15%' height='1%' />

    <rect x="0" y="80%" rx="6" ry='6' width='15%' height='3%' />
    <rect x="20%" y="80%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="20%" y="82%" rx="6" ry='6' width='15%' height='1%' />

    <rect x="0" y="84%" rx="6" ry='6' width='15%' height='3%' />
    <rect x="20%" y="84%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="20%" y="86%" rx="6" ry='6' width='15%' height='1%' />



    <rect x="0" y="88%" rx="6" ry='6' width='30%' height='1.5%' />

    <rect x="0" y="90%" rx="6" ry='6' width='40' height='40' />
    <rect x="50" y="90%" rx="6" ry='6' width='40' height='40' />
    <rect x="100" y="90%" rx="6" ry='6' width='40' height='40' />
    <rect x="150" y="90%" rx="6" ry='6' width='40' height='40' />
    <rect x="200" y="90%" rx="6" ry='6' width='40' height='40' />
    <rect x="250" y="90%" rx="6" ry='6' width='40' height='40' />

    <rect x="85%" y="90%" rx="6" ry='6' width='15%' height='40' />




  </ContentLoader>
);