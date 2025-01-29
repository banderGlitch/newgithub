import React from 'react'
import "../styles/Header.css";
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <header className="header">
        <div className="container">
            <h1 className="logo">Blog Post</h1>
            <nav>
                <ul className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>
        </div>
    </header>

  )
}
