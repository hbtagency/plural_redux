import React,{PropTypes} from 'React';
import {Link} from 'react-router';

const TreeNode = ({tree}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_black">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.protoTypes = {
    course : PropTypes.object.isRequired
}

export default CourseListRow;