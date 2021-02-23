import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['riyaz','fozlol','hoq','akm','metul'];
  const products=[
    {name:'PhotoShop', price: '$50'},
    {name:'Illustrator', price: '$45'},
    {name:'PDF Reader', price: '$5'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am learning react</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        {/* <Product product={products[0]}></Product> */}
        <Person name="Fozlol" job="student"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>setUsers(data))
  },[])
  return(
    <div>
      <h3>Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}, {user.phone}, {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount]= useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    height:'200px',
    width:'200px',
    backgroundColor:'lightgray',
    float:'left'
  }
  // console.log(props);
  const {name, price}= props.product;
  // console.log(name, price);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:"2px solid gold", width:'400px'}}>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  )
}
export default App;
