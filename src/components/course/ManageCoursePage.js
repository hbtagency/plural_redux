import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

export class ManageCoursepage extends React.Component {
    constructor(props,context){
        super(props,context);
        
        this.state = {
            course: Object.assign({},this.props.course),
            errors:{}, 
            saving: false
        };

        this._updateCourseState = this._updateCourseState.bind(this);
        this._saveCourse = this._saveCourse.bind(this);
    }
    
    _updateCourseState(event){
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course:course});
    }

    _saveCourse(event){
        event.preventDefault();
        this.setState({saving:true});//This will disable button in CourseForm
        this.props.actions.saveCourse(this.state.course)
            .then(() => this._redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving:false});
            });
    }

    _redirect(){
        this.setState({saving:false});
        toastr.success('Course saved!');
        this.context.router.push('/courses');
    }
    
    //This function enables that if you refresh course page, course info will not be reset. 
    componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id){
           this.setState({course:Object.assign({},nextProps.course)});
        }
    }

    render(){
        return(
            <CourseForm 
              allAuthors={this.props.authors}
              onChange={this._updateCourseState}
              onSave={this._saveCourse}
              errors={this.state.errors}
              course={this.state.course}
              saving={this.state.saving}
            />
        );
    }
}

ManageCoursepage.propTypes = {
    course:PropTypes.object.isRequired,
    authors:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageCoursepage.contextTypes = {
    router:PropTypes.object
};


function getCourseById(courses,id){
    const course = courses.filter(course => course.id == id);
    if(course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps){
    const courseId = ownProps.params.id;// from the path '/course/:id'

    let course = {id:'',watchHref:'',title:'',authorId:'',length:'',category:''};
    
    if(courseId && state.courses.length > 0){
        course = getCourseById(state.courses, courseId);
    }

    //Author needs to be reformat
    const authorsFormattedForDropdown = state.authors.map(
        author => {
           return{
              value: author.id,
              text: author.firstName + ' ' + author.lastName 
           };  
        }
    );
    
    return {
        course:course,
        authors:authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions, dispatch)  
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (ManageCoursepage);