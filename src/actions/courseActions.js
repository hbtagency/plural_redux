import * as types from './actionTypes/actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';
/* not in use
export function createCourse(course){
    //Step 2, find step 3 in reducer
    return {type: types.CREATE_COURSE,course};
}*/

export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course){
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course){
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses(){
    return function(dispatch) {
        dispatch(beginAjaxCall());
        //getAllCourses returns a promise
        return courseApi.getAllCourses().then(
            courses =>{
                dispatch(loadCoursesSuccess(courses));
            }).catch(error => {
                throw(error);
            });
    };
}

export function saveCourse(course){
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)):dispatch(createCourseSuccess(savedCourse));
        }).catch(error=>{
            throw(error);
        });
    };
}