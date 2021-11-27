import React from "react"

import lock from "../../../assets/lock.svg"
import meter from "../../../assets/meter.svg"
import refresh from "../../../assets/refresh.svg"

import * as tokenStyles from "../../styles/token.module.scss"

const Tokenomics = () => {
  return (
    <div className={tokenStyles.token}>
      <div className="row">
        <div className="u-text-center">
          <h1 className={tokenStyles.eco}>tokenomics</h1>
          <div className={tokenStyles.custom_flex}>
            <div className={tokenStyles.custom_column}>
              <span>
                <img
                  src={refresh}
                  alt="Refresh"
                  className={tokenStyles.custom_span}
                />
              </span>
              <h3 className={tokenStyles.token_head}>18%</h3>
              <p className={tokenStyles.token_desc}>
                of supply in locked liquidity for 1 year
              </p>
            </div>
            <div className={tokenStyles.custom_column}>
              <span>
                <img
                  src={meter}
                  alt="Meter"
                  className={tokenStyles.custom_span}
                />
              </span>
              <h3 className={tokenStyles.token_head}>5%</h3>
              <p className={tokenStyles.token_desc}>black hole</p>
            </div>
            <div className={tokenStyles.custom_column}>
              <span>
                <img
                  src={lock}
                  alt="Lock"
                  className={tokenStyles.custom_span}
                />
              </span>
              <h3 className={tokenStyles.token_head}>73%</h3>
              <p className={tokenStyles.token_desc}>
                of remaining total supply in circulation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
