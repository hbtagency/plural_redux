import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
class CoursesPage extends React.Component{
    constructor(props,context){
        super(props,context);
        /*this.state={
            course:{title:""}
        };
        Bind here has better performance than add binding in render
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);*/
    }
    
    /*
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }
    
    onClickSave(){
        //Step1. Create a action which takes state.course, find step 2 in actions -> courseActions
        //this.props.dispatch(courseActions.createCourse(this.state.course));
        //this.props.createCourse(this.state.course);
        this.props.actions.createCourse(this.state.course);
    }*/
    /*
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }*/
    
    //Step 6, render courses 
    render(){
        const {courses} = this.props;

        return(
           <div>
               <h1>Courses</h1>
               <CourseList courses={courses}/>
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