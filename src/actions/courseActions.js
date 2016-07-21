import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
/* not in use
export function createCourse(course){
    //Step 2, find step 3 in reducer
    return {type: types.CREATE_COURSE,course};
}*/

export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
    return function(dispatch) {
        //getAllCourses returns a promise
        return courseApi.getAllCourses().then(
            courses =>{
                dispatch(loadCoursesSuccess(courses));
            }).catch(error => {
                throw(error);
            });
    };
}