import React from "react"

import "../styles/index.scss"
import ContractAddress from "./components/ContractAddress"
import CustomHeader from "./components/CustomHeader"
import Footer from "./components/Footer"
import Greet from "./components/Greet"
import Tokenomics from "./components/Tokenomics"
import Head from "./components/Head"

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <CustomHeader />
      <Greet />
      <Tokenomics />
      <ContractAddress />
      <Footer />
    </>
  )
}
