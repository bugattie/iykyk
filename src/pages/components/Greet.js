import React from "react"

import * as greetStyles from "../../styles/greet.module.scss"

const Greet = () => {
  return (
    <div className={greetStyles.greet}>
      <div className="row">
        <div className="u-text-center">
          <p className={greetStyles.iy}>$iykyk</p>
          <p>a quick thesis rundown of what the coin is about.</p>
          <p className={greetStyles.para}>
            The $IYKYK token is more than a meme. It's a cultural icon for
            internet surfers worldwide, an entire generation of memers and
            crypto enthusiasts. Join our tightly nit family and see what all the
            hype is all about ;) IYKYK
          </p>
        </div>
      </div>
    </div>
  )
}

export default Greet
