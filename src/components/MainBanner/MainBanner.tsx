import React, { Component } from 'react'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { IoArrowDownCircleSharp } from 'react-icons/io5'
import styles from './styles.module.css'

class MainBanner extends Component {
  render() {
    return (
      <>
        <img src="pattern-dots.svg" className={styles.patternDots} />
        <img src="patterns-square.svg" className={styles.patternSquares} />
        <section className={styles.mainWrapper}>
          <div className={styles.container}>
            <h2> ¡Hola! Me llamo </h2>
            <h1>Asuna Yuuki</h1>
            <span>
              <span className={styles.typingText}>
                SAO Character
              </span>
              <span className={styles.typingCursor}>|</span>
            </span>
            <div className={styles.iconWrapper}>
              <FaLinkedinIn />
              <FaTwitter />
              <FaGithub />
            </div>
          </div>
          <div className={styles.nextWrapper}> </div>
          <IoArrowDownCircleSharp className={styles.nextButton} />
        </section>
      </>
    )
  }
}

export default MainBanner 
