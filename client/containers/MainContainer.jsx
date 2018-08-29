import React from 'react';
import Sidebar from './Sidebar.jsx';
import BoardContainer from './BoardContainer.jsx';
import UserContainer from './UserContainer.jsx';


const MainContainer = props => (
  
  <div id="main" className="flexColumn">
    <div className="flexRow" style={{width: '100%', height: '10vh'}}> 
      <h1 style={{fontSize: '3em', color: 'white'}}>BUBBLIFY</h1>
    </div>
    <div className="flexRow" style={{width: '100'}}>
      <UserContainer /> 
     
    </div>
  </div>
);


export default MainContainer;
