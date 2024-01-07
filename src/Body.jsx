import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Categories from './Categories/Categories'
import AboutUs from './AboutUs/AboutUs'
import Service from './Service/Service'
import Tutorial from './Tutorial/Tutorial'
import Choose from './Choose/Choose'
import Explore from './Explore/Explore'
import Works from './Works/Works'
import Agents from './Agents/Agents'
import Clients from './Clients/Clients'
import NewsLetter from './NewsLetter/NewsLetter'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'
import Property from './Property/Property'
const Body = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Banner />
        <Categories />
        <AboutUs />
        <Service />
        <Tutorial />
        <Choose />
        <Property />
        <Explore />
        <Works />
        <Agents />
        <Clients />
        <NewsLetter />
        <Blog />
        <Footer />
    </div>
  )
}

export default Body
