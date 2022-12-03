import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { strs } from './data/blanko';

var available_strs = strs;
const random = Math.floor(Math.random() * available_strs.length);
const str = available_strs[random];
//console.log(str);  
const strArray = Array.from(str);
//console.log(strArray);
var deleteIndex = []
  while(deleteIndex.length < 3){
    var r = Math.floor(Math.random() * 12);
    if(strArray[r] !== ' ' && deleteIndex.indexOf(r) === -1){
      deleteIndex.push(r);
    }
  }
const endArr = strArray.map((item, index) => {
  return {
    id: index,
    title: item,
    value: '',
    isEdit: deleteIndex.indexOf(index) === -1
  }
})
console.log(endArr)

function Blanko() {
  //console.log(available_strs)
  const str = available_strs[random];
  console.log(str);
  const strArray = Array.from(str);
  console.log(strArray);

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

  // not finished
  const checkInputs = (e, arr) => {
    /* var count = 0;
    endArr.map((arr) => {
      if (arr.isEdit === false) {
        if (arr.value === arr.title) {
          count += 1
        }
      }
    })
    if (count === 3) {
      console.log('Correct!');
    } */
    console.log(arr)
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
            {endArr.map((arr, i) => {
              if(arr.isEdit === false) {
                return (
                  <div key={i} style={{
                    borderStyle: 'solid',
                    width: '50px',
                    height: '50px',
                  }}>
                    <input id={i} style={{
                      width: '45px',
                      border: 'none',
                      borderBottom: '1px solid black'
                    }} type='text'
                    value={arr.value}
                    onChange={(e) => {
                      checkInputs(e,arr)
                    }}></input>
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
                    {arr.title}
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