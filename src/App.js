import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let fname = "Mohon";
  let lname = "Mia";
  let testStylesheet = {
    background:'red',
    padding: "10px",
    borderRadius: '5px'
  }
  return (
    <div className="App">
      <header className="App-header">
      <SmilarStaticData></SmilarStaticData>
      <SmilarStaticData></SmilarStaticData>

      <SimilarPaternDynami name="Mohon Mia" desg="web developer"></SimilarPaternDynami>
      <SimilarPaternDynami name="Nazrul Islam" desg="Froentend developer"></SimilarPaternDynami>
      </header>
    </div>
  );
}

function SmilarStaticData(){
  const PersonStylesheet = {
    backgroundColor: 'red',
    color: '#fff',
    padding: '5px',
    marginTop:'5px'
  }
  return(
  <div style={PersonStylesheet}>
    <h1 style={{margin:'0',padding:'0'}}>Component Pattern</h1>
    <h2 style={{margin:'0',padding:'0'}}>Another Component Pattern</h2>
  </div>);
}

function SimilarPaternDynami(props){
  let dyanmicStylesheel = {
    backgroundColor: 'yellow',
    color: 'green',
    padding: '5px',
    marginTop: '5px'
  }
  return(
    <div>
      <h1 style={dyanmicStylesheel}>Name:{props.name}</h1>
      <h4 style={dyanmicStylesheel}>Designation:{props.desg}</h4>
    </div>
  );
}
export default App;
