import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './route';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadTree} from './actions/treeActions';



const store = configureStore();
//Init store by async call


store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadTree());


render(
    <Provider store={store}>
       <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.getElementById('app')  
);