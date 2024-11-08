import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonDiscountPage = () => (
  <ContentLoader
    speed={2}
    height={1000}
    width='100%'
    className={classes.businessPage}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    
    {/* img */}
    <rect x="0" y="0" rx="6" ry='6' width='25.5%' height='45%' />
    {/* content */}
    <rect x="30%" y="30" rx="6" ry='6' width='30%' height='32' />
    <rect x="30%" y="80" rx="6" ry='6' width='50%' height='20' />
    <rect x="30%" y="130" rx="6" ry='6' width='20%' height='26' />
    <rect x="30%" y="170" rx="6" ry='6' width='60%' height='20' />

    <rect x="76%" y="37%" rx="6" ry='6' width='5%' height='4%' />
    <rect x="83%" y="37%" rx="6" ry='6' width='5%' height='4%' />
    <rect x="90%" y="37%" rx="6" ry='6' width='5%' height='4%' />

    {/* widget right */}
    <rect x="72%" y="50%" rx="6" ry='6' width='10%' height='2%' />

    <rect x="72%" y="53%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="53%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="55%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="72%" y="57%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="57%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="59%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="72%" y="61%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="61%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="63%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="72%" y="65%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="65%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="67%" rx="6" ry='6' width='4%' height='1%' />

    {/* widget right bottom */}
    <rect x="72%" y="71%" rx="6" ry='6' width='10%' height='2%' />

    <rect x="72%" y="74%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="77%" y="74%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="82%" y="74%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="87%" y="74%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="92%" y="74%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="97%" y="74%" rx="6" ry='6' width='3%' height='4%' />

    <rect x="72%" y="79%" rx="6" ry='6' width='20%' height='2.5%' />

    {/* first widget */}
    <rect x="1.5%" y="50%" rx="6" ry='6' width='20%' height='2%' />
    <rect x="1.5%" y="53%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="1.5%" y="55%" rx="6" ry='6' width='30%' height='1.5%' />


    <rect x="1.5%" y="60%" rx="6" ry='6' width='20%' height='2%' />

    <rect x="1.5%" y="63%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="1.5%" y="65%" rx="6" ry='6' width='10%' height='1.5%' />

    <rect x="1.5%" y="68%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="1.5%" y="70%" rx="6" ry='6' width='10%' height='1.5%' />

    <rect x="20%" y="74%" rx="6" ry='6' width='20%' height='4.5%' />


  </ContentLoader>
);