 import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import './stylo.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <ProgressSpinner 
        style={{ width: '60px', height: '60px' }} 
        strokeWidth="6" 
        fill="var(--surface-ground)" 
        animationDuration=".8s" 
      />
      <p className="loading-text">Cargando, por favor espera...</p>
    </div>
  );
};

export default Loading;
