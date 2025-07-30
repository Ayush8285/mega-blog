/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Menu, X } from 'lucide-react' // for icons (optional)

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ]

  return (
    <header className='py-4 shadow-md bg-gradient-to-r from-blue-100 via-white to-blue-100'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/'>
            <Logo width='40px' />
          </Link>

          {/* Mobile menu toggle */}
          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)} className='p-2'>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation links */}
          <ul
            className={`flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center absolute md:static bg-white md:bg-transparent left-0 right-0 top-[60px] md:top-auto px-6 py-4 md:p-0 shadow md:shadow-none transition-all duration-300 z-50 ${
              menuOpen ? 'block' : 'hidden md:flex'
            }`}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className='w-full md:w-auto'>
                    <button
                      onClick={() => {
                        navigate(item.slug)
                        setMenuOpen(false)
                      }}
                      className='w-full text-left md:text-center px-4 py-3 md:py-2 text-base md:text-lg rounded-md hover:bg-blue-200 transition duration-200 font-medium'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
