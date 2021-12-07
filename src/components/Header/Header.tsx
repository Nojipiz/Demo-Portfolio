import React, { Component } from 'react'
import styles from './styles.module.css'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1> Pepe </h1>
        <div className={styles.buttonsWrapper}>
          <button>Sobre mi</button>
          <button>Portafolio</button>
          <button>Escribeme</button>
        </div>
      </header>
    )
  }
}

export default Header
