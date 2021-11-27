import { Link } from "gatsby"
import React from "react"

import * as contractStyles from "../../styles/contract.module.scss"

const ContractAddress = () => {
  return (
    <div className={contractStyles.contract}>
      <div className="row">
        <div className="u-text-center">
          <h1>ETH Contract Address</h1>
          <p>0x35395a291ad6776d95d6ecb6abb43fc6d0a44bbc</p>
          <Link
            to="https://etherscan.io/token/0x35395a291ad6776d95d6ecb6abb43fc6d0a44bbc"
            target="_blank"
            className={contractStyles.contract_link}
          >
            view on etherscan
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContractAddress
