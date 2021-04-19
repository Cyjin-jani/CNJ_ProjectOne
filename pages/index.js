import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// parameter 신경 안씀
const ArrowFunction = _ => <div><h2>I am arrow</h2></div>

function CompA() {
  //JSX - Javascript XML
  // return (
  //   <>
  //     <h1>CompA</h1>
  //     <p>CompA paragraph</p>
  //     <CompB />
  //   </>
  // )

  return (
    // without JSX
    React.createElement(React.Fragment, null, 
    React.createElement("h1", null, "comp a"),
    React.createElement("p", null, "Hello comp a"),
    React.createElement(CompB)
    )
  )
}
const CompB = ({ myProp }) => {
  
  useEffect(() => {
    console.log('prop has changed!');
  }, [myProp]);
  
  return (
    <>
      <h1>CompB</h1>
      <p>Hello compB myValue: {myProp} </p>
    </>
  )
}

//JSX - Javascript XML
class CompC extends React.Component {
  render() {
    return (
     <>
      <h1>hello compc</h1>
     </>
    );
  }
}

const BtnSection = styled.div`
  margin-top: 10px;
`;

const MyBtn = styled.button`
  width: 150px;
  height: 48px;
  padding: 20px;
  background: #fff;
  border: 1px solid blue;
  border-radius: 4px;
  outline: none;
`;

const HomePage = () => {
  // const value = useState(0);
  const [myValue, setMyValue] = useState(10);

  // const incrementVal = () => {
  //   setMyValue(myValue + 1);
  // }

  // const decrementVal = () => {
  //   setMyValue(myValue - 1);
  // }

  useEffect(() => {
    console.log('has changed!');
  }, [myValue]);

  const handleChange = (increment) => {
    setMyValue(myValue + increment);
  }

  return (
    <>
      <h1>CurrentValue: {myValue}</h1>
      <BtnSection>
      
      {/* 각각 다른 함수 */}
      {/* <MyBtn onClick={incrementVal}>+</MyBtn>
      <MyBtn onClick={decrementVal}>-</MyBtn> */}
      
      {/* 하나의 함수로 컨트롤 */}
      {/* <MyBtn onClick={() => handleChange(+1)}>+</MyBtn>
      <MyBtn onClick={() => handleChange(-1)}>-</MyBtn> */}

      {/* 함수 없이 컨트롤 */}
      <MyBtn onClick={() => setMyValue(myValue + 1)}>+</MyBtn>
      <MyBtn onClick={() => setMyValue(myValue - 1)}>-</MyBtn>
      </BtnSection>
      <CompB myProp={myValue} />
      {/* <ArrowFunction /> */}
    </>
  )
}


export default HomePage
