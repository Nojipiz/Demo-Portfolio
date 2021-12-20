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
    return <h1>Profile elemenet</h1>
  }

  studyElement(): ReactElement {
    return <h1> Study element </h1>
  }

  skillsElement(): ReactElement {
    return <h1> Skills Element</h1>
  }

  render() {
    return (
      <>
        <ul className={styles.titleList}>
          {this.elementList.map((element: Element) => {
            return <li><a>{element.title}</a></li >
          })}
        </ul>
        {this.state.currentElement.content}
      </>
    )
  }
}

export default AboutElements
