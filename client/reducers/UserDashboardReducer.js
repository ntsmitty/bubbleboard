import * as types from "../constants/actionTypes";
import UserContainer from '../containers/UserContainer.jsx'; 







const initialState = {
    userData: [{user1: 'lololololol'}, {user2: 'hahahahaha'}, {user3: 'jajjajajajaj'}], 
}


const UserDashboardReducer = (state = initialState, action) => {
    console.log('Userdashboardreducer', action.type )
    switch (action.type) {
      case types.STORE_USER_DATA:
       

        return {};

    
    default: 
    console.log(state)
      return state  
    }
}





export default UserDashboardReducer; 