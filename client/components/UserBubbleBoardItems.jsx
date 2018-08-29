import React from 'react';
import UserBubbleBoard from '../coomponents/UserBubbleBoard.jsx'; 
import { ListGroup } from 'react-bootstrap';
import { ListItem } from 'react-bootstrap';




const BubbleBoardItem = (props) => {
  render() {
    return(
      <listGroupItem userInformation={props.userInformation}> UserBubbleBoards </listGroupItem>
    ) 
  };
};




