import * as types from "../actions/actionTypes";

export default function courseReducer(state=[],action){
    switch(action.type){
        /*case types.CREATE_COURSE:
               //return {...state, course:action.course};
               //Step 3 here, takes actions and state, return a new state. find step 4 in CoursePage.
               return [...state, Object.assign({},action.course)];*/
        case types.LOAD_COURSES_SUCCESS:
               return action.courses;

        default:
               return state;
    }
}