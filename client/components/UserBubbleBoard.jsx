import React, { Component } from 'react'; 
import { throws } from 'assert';
import UserContainer from '../containers/UserContainer.jsx'
import { Modal } from 'react-bootstrap'
import  { ListGroup } from 'react-bootstrap'; 
import { ListGroupItem } from 'react-bootstrap'
import BubbleBoardItem from '../components/UserBubbleBoardItems.jsx'


const UserBubbleBoard = (props) => {
    return(
      <div className='user-bubble-modal'>
       <Modal.Dialog>
         <Modal.Header>
           <Modal.Title>User Bubble Boards</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <ListGroup>
  
           {props.userInformation.map(()  =>  { 
             <BubbleBoardItem userInformation={ props.userInformation } />
           })}; 
           </ListGroup>
         </Modal.Body>
        </Modal.Dialog>
      </div>
    )
 }

 export default UserBubbleBoard; 


