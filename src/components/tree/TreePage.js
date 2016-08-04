import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

export class TreePage extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    

    render(){
        return(
            <div className="treeContainer">
              <h1>Tree</h1>
                {this.props.tree.type}
            </div>
        );
    }
}

Treepage.propTypes = {
    tree:PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps){
    return {
        tree:state.tree
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (TreePage);