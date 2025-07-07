'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Order', href: '#order' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="nav-logo">Tanabana by SB</h1>

        {/* Desktop Nav */}
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
