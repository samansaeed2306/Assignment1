import React from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
// import './App.css';
import {useState , useEffect} from "react";


import Axios from "axios";



  function Customer(){
    const [listOfUsers,setListOfUsers]=useState([]);
    const [FirstName, setFname]=useState("");
    const [LastName, setLname]=useState("");
    const [Email, setEmail]=useState("");
    const [Password, setPassword]=useState("");
    useEffect(()=>{
        Axios.get("http://localhost:3001/getCustomer").then((response)=>{
          setListOfUsers(response.data);
        });
          },[]);
          const createCustomer=()=>{
            Axios.post("http://localhost:3001/createCustomer",{
                FirstName,
                LastName,
                Email,
                Password
            }).then((response)=>{
            setListOfUsers([...listOfUsers,{FirstName,LastName,Email,Password
            }])
            })
              }
              return (
                <div className="App">
                  <div className="usersDisplay" >
            {listOfUsers.map((customers)=>{
            return(
              <div>
                <h1>Name: {customers.FirstName}</h1>
                <h1>Lname: {customers.LastName}</h1>
                </div>
            )
            
            }
            
            )}
                  </div>
                  <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
      The best offer <br />
      <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eveniet, itaque accusantium odio, soluta, corrupti aliquam
      quibusdam tempora at cupiditate quis eum maiores libero
      veritatis? Dicta facilis sint aliquid ipsum atque?
    </p>

  </MDBCol>

  <MDBCol md='6' className='position-relative'>

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass'>
      <MDBCardBody className='p-5'>

        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={(event)=>{
            setFname(event.target.value);
              }}/>
          </MDBCol>

          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' onChange={(event)=>{
            setLname(event.target.value);
              }}/>
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(event)=>{
            setEmail(event.target.value);
              }}/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(event)=>{
            setPassword(event.target.value);
              }}/>

        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn onClick={createCustomer} className='w-100 mb-4' size='md'>sign up</MDBBtn>

        <div className="text-center">

          <p>or sign up with:</p>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>

</MDBRow>

</MDBContainer>
                    
                </div>
              );
  }
  export default Customer;