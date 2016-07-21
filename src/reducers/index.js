import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
   //courses : courses to be short as
   courses
});

export default rootReducer;