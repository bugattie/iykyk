import React from "react"

import "../styles/index.scss"
import ContractAddress from "./components/ContractAddress"
import CustomHeader from "./components/CustomHeader"
import Distribution from "./components/Distribution"
import Footer from "./components/Footer"
import Greet from "./components/Greet"
import Tokenomics from "./components/Tokenomics"

export default function Home() {
  return (
    <>
      <CustomHeader />
      <Greet />
      <Tokenomics />
      <ContractAddress />
      {/* <Distribution /> */}
      <Footer />
    </>
  )
}
