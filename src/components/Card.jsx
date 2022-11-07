import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App(props) {
  return (
    <MDBCard alignment='center'>
      <MDBCardHeader>{props.city}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{props.type}</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Edit Room</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>{props.cost}</MDBCardFooter>
    </MDBCard>
  );
}