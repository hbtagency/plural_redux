import * as types from "../actions/actionTypes/actionTypes";
import initialState from '../store/initialState';

export default function courseReducer(state=initialState.courses,action){
    switch(action.type){
        /*case types.CREATE_COURSE:
               //return {...state, course:action.course};
               //Step 3 here, takes actions and state, return a new state. find step 4 in CoursePage.
               return [...state, Object.assign({},action.course)];*/
        case types.LOAD_COURSES_SUCCESS:
               return action.courses;
     
        case types.CREATE_COURSE_SUCCESS:
              return [
                  ...state,
                  Object.assign({}, action.course)
              ];

        case types.UPDATE_COURSE_SUCCESS:
              return [
                  ...state.filter(course => course.id !== action.course.id),
                  Object.assign({}, action.course)
              ];
    
        default:
               return state;
    }
}