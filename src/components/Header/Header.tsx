import React, { Component } from 'react'
import styles from './styles.module.css'
import { MdEmail } from 'react-icons/md'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1> Pepe </h1>

        <nav className={styles.navWrapper}>
          <ul className={styles.listWrapper}>
            <li className={styles.commonButton}>Sobre mi</li>
            <li className={styles.commonButton}>Porfolio</li>
            <li className={styles.writeMe}>Escribeme <MdEmail /></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
