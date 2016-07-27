import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
   //courses : courses to be short as
   courses,
   authors,
   ajaxStatusReducer
});

export default rootReducer;