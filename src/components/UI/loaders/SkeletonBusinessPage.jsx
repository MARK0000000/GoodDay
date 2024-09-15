import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Loaders.module.scss';

export const SkeletonBusinessPage = () => (
  <ContentLoader
    speed={2}
    height={1200}
    width='100%'
    className={classes.businessPage}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* first line */}
    <rect x="0" y="0" rx="6" ry='6' width='40%' height='2.5%' />
    <rect x="0" y="3%" rx="6" ry='6' width='20%' height='1.5%' />
    <rect x="68%" y="0" rx="6" ry='6' width='5%' height='4%' />
    <rect x="75%" y="0" rx="6" ry='6' width='5%' height='4%' />
    <rect x="82%" y="0" rx="6" ry='6' width='5%' height='4%' />
    <rect x="88%" y="0" rx="6" ry='6' width='15%' height='4%' />
    <rect x="0" y="6%" rx="6" ry='6' width='50%' height='2.5%' />
    
    {/* img */}
    <rect x="0" y="9%" rx="6" ry='6' width='100%' height='48%' />

    {/* first widget */}
    <rect x="1.5%" y="60%" rx="6" ry='6' width='20%' height='2%' />
    <rect x="1.5%" y="63%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="1.5%" y="65%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="16%" y="63%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="16%" y="65%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="31%" y="63%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="31%" y="65%" rx="6" ry='6' width='10%' height='1.5%' />
    <rect x="1.5%" y="67%" rx="6" ry='6' width='30%' height='1.5%' />

    {/* widget-info */}
    <rect x="0" y="72%" rx="6" ry='6' width='5%' height='2%' />
    <rect x="8%" y="72%" rx="6" ry='6' width='5%' height='2%' />
    <rect x="16%" y="72%" rx="6" ry='6' width='5%' height='2%' />
    <rect x="0" y="75%" rx="6" ry='6' width='60%' height='1.5%' />

    {/* widget right top */}
    <rect x="72%" y="60%" rx="6" ry='6' width='10%' height='2%' />

    <rect x="72%" y="63%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="63%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="65%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="72%" y="67%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="67%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="69%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="72%" y="71%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="71%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="73%" rx="6" ry='6' width='4%' height='1%' />

    <rect x="72%" y="75%" rx="6" ry='6' width='3%' height='3%' />
    <rect x="77%" y="75%" rx="6" ry='6' width='5%' height='1.5%' />
    <rect x="77%" y="77%" rx="6" ry='6' width='4%' height='1%' />

    {/* widget right bottom */}
    <rect x="72%" y="81%" rx="6" ry='6' width='10%' height='2%' />

    <rect x="72%" y="84%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="77%" y="84%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="82%" y="84%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="87%" y="84%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="92%" y="84%" rx="6" ry='6' width='3%' height='4%' />
    <rect x="97%" y="84%" rx="6" ry='6' width='3%' height='4%' />

    <rect x="72%" y="89%" rx="6" ry='6' width='20%' height='2.5%' />
  </ContentLoader>
);