import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Dashboard() {
  return (
    <div>
      <Header />
      <div style={{
        position: 'absolute',
        margin: '0',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <span style={{
          color: 'red',
          fontSize: '2em',
        }}>
          Please choose an option from the navbar.
        </span>
        <div style={{
          position: 'absolute',
          marginTop: '20px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          Games won: <span><button>reset</button></span>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Dashboard;