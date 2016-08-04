import * as types from './actionTypes/actionTypes';
import treeApi from '../api/mockTreeApi';
import {beginAjaxCall} from './ajaxStatusActions';
/* not in use
export function createCourse(course){
    //Step 2, find step 3 in reducer
    return {type: types.CREATE_COURSE,course};
}*/

export function loadTreeSuccess(courses){
    return {type: types.LOAD_TREE_SUCCESS, courses};
}

export function loadTree(){
    return function(dispatch) {
        return treeApi.getTree().then(
            tree =>{
                dispatch(loadTreeSuccess(tree));
            }).catch(error => {
                throw(error);
            });
    };
}

