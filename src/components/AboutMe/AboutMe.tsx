import React, { Component } from 'react'
import styles from './styles.module.css'

class AboutMe extends Component {
  render() {
    return (
      <section className={styles.mainSection}>
        <div className={styles.contentWrapper}>
          <img src="photo-me.png" />
          <div className={styles.aboutMeWrapper}>

          </div>
        </div>
      </section>
    )
  }
}

export default AboutMe
