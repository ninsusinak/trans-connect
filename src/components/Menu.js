// Menu.js
import React, { useState } from 'react';
import UserProfile from './UserProfile'; // Assuming you have a UserProfile component
import PostList from './PostList'; // Assuming you have a PostList component

const Menu = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li className={`menu-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleMenuClick('home')}>
          <img src="media/home.png" alt="Home" className="menu-icon" />
        </li>
        <li className={`menu-item ${activeSection === 'profile' ? 'active' : ''}`} onClick={() => handleMenuClick('profile')}>
          <img src="media/profile.png" alt="Profile" className="menu-icon" />
        </li>
        <li className={`menu-item ${activeSection === 'posts' ? 'active' : ''}`} onClick={() => handleMenuClick('posts')}>
          <img src="media/post.png" alt="Post" className="menu-icon" />
        </li>
      </ul>

      <div className="route-container">
        {activeSection === 'home' && (
          <div className="route-content">
            <h2>Welcome to the Home Page</h2>
            {/* Add content for the home section */}
          </div>
        )}

        {activeSection === 'profile' && (
          <div className="route-content">
            <UserProfile userId="123" />
            {/* Add content for the profile section */}
          </div>
        )}

        {activeSection === 'posts' && (
          <div className="route-content">
            <PostList />
            {/* Add content for the posts section */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;