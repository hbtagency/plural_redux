import React,{PropTypes} from 'React';
import './node.css';

const TreeNode = ({node,handleOnclick,handleOnchange}) => {
    return (
        <ul className={node.type}>
            <li id={node.id + '_desc'} onClick={handleOnclick}>
                <span>Description: {node.desc}</span>
                <input type="text" onChange={handleOnchange} placeholder={node.desc}/>
            </li>
            <li>
                Node Type: {node.type}
            </li>
            <li>
                Node Value: {node.value}
            </li>
        </ul>
    );
}

TreeNode.propTypes = {
    node : PropTypes.object.isRequired,
    handleOnclick : PropTypes.func.isRequired,
    handleOnchange : PropTypes.func.isRequired
}

export default TreeNode;