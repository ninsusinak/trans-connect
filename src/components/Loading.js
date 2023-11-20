// Loading.js
import React from 'react';
import SpinningLogo from './SpinningLogo';
import './styles.css'; // Import the CSS file

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <SpinningLogo />
    </div>
  );
};

export default Loading;