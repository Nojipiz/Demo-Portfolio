import React, { Component } from 'react'
import PortfolioElement from './PortfolioElement'
import styles from './styles.module.css'

class Porfolio extends Component {
  render() {
    return (
      <section className={styles.mainSection}>
        <h1 className={styles.mainTitle}>Porfolio</h1>
        <div className={styles.elementsList}>
          <PortfolioElement />
          <PortfolioElement />
          <PortfolioElement />
          <PortfolioElement />
        </div>
      </section>
    )
  }
}

export default Porfolio
