/**
 * ************************************
 *
 * @module  actions.js
 * @author seano 
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'


export const loadJSON = () => {
  console.log("loadJSON action creator called");
  return {
  type: types.LOAD_BUBBLES,
  }
};

export const inputChange = (string) =>{
  return {
    type: types.INPUT_CHANGE,
    payload: string,
  }
}

export const storeUserData = (userObjs) => {
  return {
    type: types.STORE_USER_DATA,
    payload: userObjs, 
   }
}

export const rootChange = (string) =>{
  return {
    type: types.ROOT_CHANGE,
    payload: string,
  }
}

export const addBoard  = (num) => {
  return {
    type: types.ADD_BOARD,
    payload: num,
  }
}

export const loadUserBubbleBoards = (object) =>  {
  return {
    type: types.LOAD_USER_BUBBLEBOARDS,
    payload: object, 
  }
}
