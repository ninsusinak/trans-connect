// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/posts">Posts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;