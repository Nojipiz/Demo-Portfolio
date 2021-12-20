import React, { Component } from 'react'
import AboutElements from './AboutElements'
import styles from './styles.module.css'

class AboutMe extends Component {
  render() {
    return (
      <section className={styles.mainSection}>
        <div className={styles.contentWrapper}>
          <img src="photo-me.png" />
          <div className={styles.aboutMeWrapper}>
            <AboutElements />
          </div>
        </div>
      </section>
    )
  }
}

export default AboutMe
