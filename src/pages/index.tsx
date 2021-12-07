import type { NextPage } from 'next'
import { Interface } from 'readline'
import AboutMe from '../components/AboutMe/AboutMe'
import Header from '../components/Header/Header'
import MainBanner from '../components/MainBanner/MainBanner'
import Porfolio from '../components/Porfolio/Porfolio'

const Main: NextPage = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <AboutMe />
      <Porfolio />
    </>
  )
}

export default Main
