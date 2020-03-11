import React,{useState} from  'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const nayoks = ["mohon","mia", "nazrul", "islam"];
  const products = [
    {name: 'Adbode photoshop', price: '$500'},
    {name: 'Adbode Ilustrator', price: '$1000'},
    {name: 'Adbode web', price: '$5400'},
  ];

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
        <Counter></Counter>
      <ul>
        {
          nayoks.map(nayok=> <li>{nayok}</li>)
        }
      </ul>
      {
        products.map(product=> <Person product={product}> </Person>)
      }
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

function Person(props){
  const productsStyle = {
    backgroundColor: 'lightgray',
    color: 'black',
    height: '200px',
    width: '200px',
    border: '2px',
    borderRadius: '5px',
    float:'left',
    marginTop: '5px'
  }
  const {name,price} = props.product;
  //console.log(props);
  return(
    <div style={productsStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
    </div>
  )
}

function Counter(){
  const [Count,setCount] = useState(10);

  return(
    <div>
      <h2>Count: {Count}</h2>
      <button onClick={() => setCount(Count-1)}>Decrease</button>
      <button onClick={() => setCount(Count+1)}>Increase</button>
    </div>
  )
}
export default App;
