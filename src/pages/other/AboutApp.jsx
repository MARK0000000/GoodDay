import React from 'react'
import InfoAboutCompony from '../../components/aboutAppPage/InfoAboutCompony'
import HowItWorks from '../../components/aboutAppPage/HowItWorks'
import Opportunities from '../../components/aboutAppPage/Opportunities'
import Invitation from '../../components/aboutAppPage/Invitation'
import Ratings from '../../components/aboutAppPage/Ratings'
import Question from '../../components/aboutAppPage/Question'
import BreadCrumbs from '../../components/main/Breadcrambs'

export default function AboutApp() {
  return (
    <>
      <BreadCrumbs current={"О приложении"}/>
      <InfoAboutCompony/>
      <HowItWorks/>
      <Opportunities/>
      <Invitation/>
      <Ratings/>
      <Question/>
    </>
  )
}
