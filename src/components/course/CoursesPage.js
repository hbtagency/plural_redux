import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render(){
        const {courses} = this.props;
        return(
           <div>
               <h1>Courses</h1>
               <CourseList courses={courses}/>
               <input type="submit"
                      value="Add Course"
                      className="btn btn-primary"
                      onClick={this.redirectToAddCoursePage}/>
           </div>  
        );
    }
}

               /*
               {this.props.courses.map(this.courseRow)}
               <h2>Add Course</h2>
               <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
               <input type="submit" onClick={this.onClickSave} value="Submit"/>*/

//Some validation here
CoursesPage.propTypes = {
    //dispatch:PropTypes.func.isRequired, dispatch no longer in user once mapDispatchToProps injected.
    //courses:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired,
    //createCourse:PropTypes.func.isRequired
    courses:PropTypes.array.isRequired
};

//Inject Step 5, apply change to state.
function mapStateToProps(state,ownProps) {
    return{
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions,dispatch)
    }
}
//Connect will inject dispatch
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);