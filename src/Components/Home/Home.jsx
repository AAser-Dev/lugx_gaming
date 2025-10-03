// Home.jsx - الإصدار المصحح
import React from "react"
import Navbar from "../Navbar/Navbar"   
import Footer from "../Footer/Footer" 
import { Outlet } from "react-router-dom"
import Banner from "./Banner"
import Features from "./Features"
import Trending from "./Trending"
import TopGames from "./TopGames"
import Categories from "./Categories"
import CTA from "./CTA"

const Home = () => {
  return (
    <>
    <div className="hero-section">
      <Banner />
      </div>
      <Features />
      <Trending />
      <TopGames />
      <Categories />
      <CTA />
    </>
  )
}

export default Home