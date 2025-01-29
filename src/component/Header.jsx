import React from 'react'
import "../styles/Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
        <div className="container">
            <h1 className="logo">My website</h1>
            <nav>
                <ul className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>

            </nav>

        </div>
    </header>

  )
}
