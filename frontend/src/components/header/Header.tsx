import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@public/logo.png'
import './header.style.scss'

export const Header = () => {
  return (
    <header className='header'>
      <Link href='/'>
        <Image className="" src={logo} width='184' height='37' alt="Logo"/>
      </Link>

      <nav className='nav'>
        <div className='burger-menu'>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className='nav__list'>
          <Link className='nav__link' href='/what-we-do'>
            <li className='nav__item'>What we do</li>
          </Link>
          <Link className='nav__link' href='/out-work'>
            <li className='nav__item'>Our work</li>
          </Link>
          <Link className='nav__link' href='/seo-insights'>
            <li className='nav__item'>Seo insights</li>
          </Link>
          <Link className='nav__link' href='/about-us'>
            <li className='nav__item'>About us</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
