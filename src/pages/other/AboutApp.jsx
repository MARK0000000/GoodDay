import React from 'react'
import InfoAboutCompany from '../../components/aboutAppPage/InfoAboutCompany'
import HowItWorks from '../../components/aboutAppPage/HowItWorks'
import Opportunities from '../../components/aboutAppPage/Opportunities'
import Invitation from '../../components/aboutAppPage/Invitation'
import Ratings from '../../components/aboutAppPage/Ratings'
import BreadCrumbs from '../../components/main/Breadcrambs'
import QuestionsBlock from '../../components/aboutAppPage/QuestionsBlock'

export default function AboutApp() {
  return (
    <>
      <InfoAboutCompany/>
      <HowItWorks/>
      <Opportunities/>
      <Invitation/>
      <Ratings/>
      <QuestionsBlock/>
    </>
  )
}
