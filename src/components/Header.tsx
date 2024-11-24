import React from 'react'
import Link from 'next/link'
import {FaLinkedin} from 'react-icons/fa'


const Header = () => {
  return (
    <div className="main">
    <header className='header'>
        <h1 className='logo'>My Portfolio</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact"><FaLinkedin className='icon'/></Link>
        </nav>
    </header>
    </div>
  )
}

export default Header