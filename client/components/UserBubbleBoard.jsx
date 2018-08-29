import React, { Component } from 'react'; 
import { throws } from 'assert';
import UserContainer from '../containers/UserContainer.jsx'
import { Modal } from 'react-bootstrap'
import  { ListGroup } from 'react-bootstrap'; 
import { ListGroupItem } from 'react-bootstrap'


const UserBubbleBoard = (props) => {
  render()
    return(
      <div className='user-bubble-modal'>
       <Mode.Dialog>
         <Modal.Header>
           <Modal.Title>User Bubble Boards</Modal.Title>
         </Modal.Header>
         <Modal.Body>wan
           <ListGroup>
           {props.userInformation.map(()  =>  { 
             <BubbleBoardItem userInformation={ props.userInformation } />
           })}; 
           </ListGroup>
         </Modal.Body>
        </Mode.Dialog>
      </div>
    )
 }

export default UserBubbleBoard; 