import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './tree-page.css';
export class TreePage extends React.Component {
    constructor(props,context){
        super(props,context);
        this.props = props;
        console.log("constructor ===1====");
    }
    
    componentWillMount(){
        console.log("componentWillMount ====2==");
    }

    componentDidMount(){
        console.log("component mounted ===4===");
    }

    render(){
        console.log("render === 3 ===");
        console.log(this.props.tree);
        return(
           <ul className="no-bullet">
               <li>Type: {this.props.tree ? this.props.tree.type : "Not found"}</li>
               <li>
                    <ul>
                        {
                            this.props.tree.nodes.map(node => 
                             <li key={node.id}>
                                {node.id}
                                <ul>
                                    <li>
                                    Description: {node.desc}
                                    </li>
                                    <li>
                                    Node Type: {node.type}
                                    </li>
                                    <li>
                                    Node Value: {node.value}
                                    </li>
                                </ul>
                             </li>
                             )
                        }
                    </ul>
               </li>
           </ul>  
        );
    }
}

TreePage.propTypes = {
    tree:PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps){
    console.log("map to state ==== Ever time action fires ====, but only this.props changes will trigger render method.");
    console.log(state);
    return {
        tree:state.tree
    };
}

export default connect(mapStateToProps) (TreePage);