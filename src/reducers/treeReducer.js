import * as types from "../actions/actionTypes/actionTypes";
import initialState from '../store/initialState';

export default function treeReducer(state=initialState.tree,action){
    switch(action.type){
        case types.LOAD_TREE_SUCCESS:
               return action.tree;
        default:
               return state;
    }
}