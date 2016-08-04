import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import tree from './treeReducer';

import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
   //courses : courses to be short as
   courses,
   authors,
   tree,
   ajaxStatusReducer
});

export default rootReducer;