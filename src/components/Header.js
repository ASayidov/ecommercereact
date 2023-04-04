import React from 'react'

function Header() {
  return (
    <header>
      <div className='nav'>
        <span className='logo'>House staff</span>
        <ul>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  )
}

export default Header