import * as types from "../actions/actionTypes/actionTypes";
import initialState from '../store/initialState';
export default function authorReducer(state=initialState.authors,action){
    switch(action.type){
        /*case types.CREATE_COURSE:
               //return {...state, course:action.course};
               //Step 3 here, takes actions and state, return a new state. find step 4 in CoursePage.
               return [...state, Object.assign({},action.course)];*/
        case types.LOAD_AUTHORS_SUCCESS:
               return action.authors;

        default:
               return state;
    }
}