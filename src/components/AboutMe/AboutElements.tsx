import React, { Component, ReactElement } from 'react'
import styles from './styles.module.css'

interface IState {
  currentElement: Element
}

type Element = {
  title: string,
  content: ReactElement
}


class AboutElements extends Component<{}, IState>{

  elementList: Element[] = [
    { title: "Perfil", content: this.profileElement() },
    { title: "Estudio", content: this.studyElement() },
    { title: "Skills", content: this.skillsElement() }
  ]

  constructor() {
    super({})
    this.state = {
      currentElement: this.elementList[0]
    }
  }

  profileElement(): ReactElement {
    return (
      <>
        <p className={styles.elementText}>En este espacio puedes contar un poco <b> mas sobre ti </b>, que tecnologias manejas, que te gusta hacer y en que te especializas</p>
      </>
    )
  }

  studyElement(): ReactElement {
    return (
      <>
        <p className={styles.elementText}>En este espacio puedes contar un poco <b> mas sobre tus estudios </b>, que tecnologias manejas, que te gusta hacer y en que te especializas</p>
      </>
    )
  }

  skillsElement(): ReactElement {
    return (
      <>
        <p className={styles.elementText}>En este espacio puedes contar un poco <b> sobre tus skills </b>, que tecnologias manejas, que te gusta hacer y en que te especializas</p>
      </>
    )
  }

  render() {
    return (
      <>
        <ul className={styles.titleList}>
          {this.elementList.map((element: Element) => {
            return <li><a onClick={() => {
              this.setState({ currentElement: element })
            }}   >{element.title}</a></li>
          })}
        </ul>
        {this.state.currentElement.content}
      </>
    )
  }
}

export default AboutElements
