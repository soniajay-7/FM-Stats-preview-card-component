import React, { useState } from 'react';

export default function Navbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            <svg className="logo-icon" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="logo-text">FoodExpress</span>
          </a>
        </div>
        <div className="navbar-links">
          <a href="/menu" className="nav-link">Menu</a>
          <a href="/restaurants" className="nav-link">Restaurants</a>
          <a href="/offers" className="nav-link">Offers</a>
        </div>
        <div className="navbar-actions">
          <div className="user-menu">
            <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="user-menu-button">
              <svg className="user-icon" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            {isUserMenuOpen && (
              <div className="user-dropdown">
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/orders" className="dropdown-item">Orders</a>
                <a href="/settings" className="dropdown-item">Settings</a>
                <a href="/logout" className="dropdown-item">Log out</a>
              </div>
            )}
          </div>
          <button className="cart-button">
            <svg className="cart-icon" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}