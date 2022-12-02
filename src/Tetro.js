import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Tetro() {
    return (
      <div>
        <Header />
        <span style={{
          color: 'red',
          position: 'absolute',
          margin: '0',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          Tetro.
        </span>
        
        <Footer />
      </div>
    )
  }
  
  export default Tetro;