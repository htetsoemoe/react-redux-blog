import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <h1>Redux Blog</h1>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='post'>Post</Link>
                    </li>
                    <li>
                        <Link to='user'>Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
