import { Link } from "gatsby"
import React from "react"

import * as headerStyles from "../../styles/header.module.scss"

import twitter from "../../../assets/twitter.svg"
import telegram from "../../../assets/telegram.svg"

const CustomHeader = () => {
  return (
    <div className={headerStyles.header}>
      <div className="row">
        <nav className={headerStyles.nav}>
          <h2>iykyk</h2>
          <div className={headerStyles.nav_item}>
            <Link
              className={headerStyles.nav__link}
              to="https://app.uniswap.org/#/swap"
              target="_blank"
            >
              buy on uniswap &rarr;
            </Link>
          </div>
        </nav>
        <div className={headerStyles.text_box}>
          <h1 className={headerStyles.heading_primary}>
            <span className={headerStyles.heading_main}>iykyk.</span>
            <span className={headerStyles.heading_sub}>wagmi</span>
          </h1>
          <Link
            className={headerStyles.myBtn}
            to="https://app.uniswap.org/#/swap"
            target="_blank"
          >
            buy on uniswap
          </Link>
          <Link
            className={headerStyles.myBtn}
            to="https://www.dextools.io/app/ether/pair-explorer/0x67f71ad2f02d3468f80ae27b3c0ee7955cb40ebc"
            target="_blank"
          >
            view dextools
          </Link>

          <div className={headerStyles.custom_img}>
            <Link to="https://twitter.com/If_u_kno_u_no" target="_blank">
              <img
                src={twitter}
                alt="Twitter"
                className={headerStyles.twitter}
              />
            </Link>
            <Link to="https://t.me/IYKYKERC20" target="_blank">
              <img
                src={telegram}
                alt="Telegram"
                className={headerStyles.telegram}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomHeader
