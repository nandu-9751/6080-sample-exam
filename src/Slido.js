import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Slido() {
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
          Slido.
        </span>
        
        <Footer />
      </div>
    )
  }
  
  export default Slido;