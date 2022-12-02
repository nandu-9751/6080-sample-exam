import React from 'react';
import logo from './assets/logo.png'
import { Link } from 'react-router-dom';

export default function Header() {
  /* let history = useHistory();
  const goToHome = () => {
    console.log('go dashboard');
    let path = '/';
    history.push(path);
  }

  const goToBlanko = () => {
    console.log('go blanko');
    let path = '/blanko';
    history.push(path);
  }

  const goToSlido = () => {
    console.log('go slido');
    let path = '/slido';
    history.push(path);
  }

  const goToTetro = () => {
    console.log('go tetro');
    let path = '/tetro';
    history.push(path);
  } */

  return (
    <div style={{
      display: 'flex',
      position: 'fixed',
      backgroundColor: '#eeeeee',
      height: '80px',
      width: '100%',
      }}>
      <img style={{
        width: '50px',
        height: '50px',
        margin: '15px',
      }} src={logo} alt='turtle logo'/>
      <span style={{
        padding: '30px',
        width: '100%',
        textAlign: 'right'
      }}>
        <nav>
          <Link to='/' style={{
            textDecoration: 'none',
          }}>Home<span style={{border: '1', color: 'black'}}>  |  </span></Link>
          <Link to='/blanko' style={{
            textDecoration: 'none',
          }}>Blanko<span style={{border: '1', color: 'black'}}>  |  </span></Link>
          <Link to='/slido' style={{
            textDecoration: 'none',
          }}> Slido<span style={{border: '1', color: 'black'}}>  |  </span></Link>
          <Link to='/tetro' style={{
            textDecoration: 'none',
          }}>Tetro</Link>
        </nav>
      </span>
    </div>
  )
}