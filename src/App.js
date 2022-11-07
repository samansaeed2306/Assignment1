
//  import logo from './logo.svg';
import React from 'react';
import './App.css';
// import {useState , useEffect} from "react";
// import Axios from "axios";
import Customer from './components/Customer';
import Room from './components/Room';
function App() {
//   const [listOfUsers,setListOfUsers]=useState([]);
//   const [name, setName]=useState("");
//   const [contact, setContact]=useState("");


//   useEffect(()=>{
// Axios.get("http://localhost:3001/getCustomer").then((response)=>{
//   setListOfUsers(response.data);
// });
//   },[]);

//   const createCustomer=()=>{
// Axios.post("http://localhost:3001/createCustomer",{
//   name,
//   contact
// }).then((response)=>{
// setListOfUsers([...listOfUsers,{name,contact
// }])
// })
// //   }
//   return (
//     <div className="App">
//       <div className="usersDisplay" >
// {listOfUsers.map((customers)=>{
return(
  <div>
    <Room/>
    {/* <h1>Name: {customers.name}</h1>
    <h1>Contact: {customers.contact}</h1>
    </div>
)

}

)}
      </div>
<div>
  <input type="text" placeholder="Name..." onChange={(event)=>{
setName(event.target.value);
  }}/>
  <input type="text" placeholder="Contact..." onChange={(event)=>{
setContact(event.target.value);
  }}/>
  <button onClick={createCustomer}>Create Customer</button>
 
</div>
        {/* /* /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */ }
      
    </div>
  ); }
// }

export default App;


