import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Все'
        },
        {
          key: 'chairs',
          name: 'Стулья'
        },
        {
          key: 'table',
          name: 'Столы'
        },
        {
          key: 'sofa',
          name: 'Диваны'
        },
        {
          key: 'light',
          name: 'Свет'
        },
      ]
    }

  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (<div key={el.id} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>))}
      </div>
    )
  }
}

export default Categories