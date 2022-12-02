import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { strs } from './data/blanko';

function Blanko() {
  var available_strs = strs;
  //console.log(available_strs)
  const random = Math.floor(Math.random() * available_strs.length);
  const str = available_strs[random];
  console.log(str);
  const strArray = Array.from(str);
  console.log(strArray);

  var deleteIndex = []
  while(deleteIndex.length < 3){
    var r = Math.floor(Math.random() * 12);
    if(strArray[r] !== ' ' && deleteIndex.indexOf(r) === -1){
      deleteIndex.push(r);
    }
  }

  console.log(deleteIndex);
  console.log(strArray[deleteIndex[0]], strArray[deleteIndex[1]], strArray[deleteIndex[2]]);

  /* var randomPosOne = getRandomInt(12);
  var randomPosTwo = getRandomInt(12);
  var randomPosThree = getRandomInt(12);

  var emptyCharOne = str[randomPosOne];
  var emptyCharTwo = str[randomPosTwo];
  var emptyCharThree = str[randomPosThree]; */

  const resetStr = () => {
    window.location.reload();
  }

  const checkInputs = () => {
    var inputOne = document.getElementById(deleteIndex[0]);
    var inputTwo = document.getElementById(deleteIndex[1]);
    var inputThree = document.getElementById(deleteIndex[2]);
    console.log(inputOne, inputTwo, inputThree)
    if (inputOne === strArray[deleteIndex[0]] && inputTwo === strArray[deleteIndex[1]] && inputThree === strArray[deleteIndex[2]]) {
      alert('Correct!');
    }
  }

  return (
    <div>
      <Header />
        <span style={{
          position: 'absolute',
          margin: '0',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div style={{
            display: 'flex',
          }}>
            {strArray}
            {strArray.map((char, i) => {
              if(deleteIndex.includes(i)) {
                return (
                  <div key={i} style={{
                    borderStyle: 'solid',
                    width: '50px',
                    height: '50px',
                  }}>
                    {/* onClick={() => goToProperty(listing.id)} */}
                    <input id={i} style={{
                      width: '45px',
                      border: 'none',
                      borderBottom: '1px solid black'
                    }} onChange={checkInputs}></input>
                  </div>
                )
              }
              else {
                return (
                  <div key={i} style={{
                    borderStyle: 'solid',
                    width: '50px',
                    height: '50px',
                  }}>
                    {/* onClick={() => goToProperty(listing.id)} */}
                    {char}
                  </div>
                )
              }
            })}
          </div>
          <div style={{
            position: 'absolute',
            marginTop: '20px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <button onClick={resetStr}>Reset</button>
          </div>
        </span>
        <Footer />
      </div>
    )
  }
  
  export default Blanko;