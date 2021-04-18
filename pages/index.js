import React from 'react';

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
function CompB() {
  return (
    <>
      <h1>CompB</h1>
      <p>Hello compB</p>
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

const HomePage = () => {
  return (
    <>
      <h1>hello world</h1>
      <CompA />
      <ArrowFunction />
    </>
  )
}


export default HomePage
