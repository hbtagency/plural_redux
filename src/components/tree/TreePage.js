import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Node from './node/Node.js';
import './tree-page.css';
import $ from 'jquery';

export class TreePage extends React.Component {
    constructor(props,context){
        super(props,context);
        this.props = props;
        this._handleClick = this._handleClick.bind(this);
        this._handleOnchange = this._handleOnchange.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);

        console.log("constructor ===1====");
    }
    
    componentWillMount(){
        console.log("componentWillMount ====2==");
    }

    componentDidMount(){
        console.log("component mounted ===4===");
    }

    _handleClick(event){
        $('#' + event.target.id).children('input').first().addClass('active');
        $('#' + event.target.id).children('span').first().addClass('deactive');
    }

    _handleMouseLeave(event){
        //Fire action here update node value
        $('#' + event.target.id).children('input').first().addClass('active');
        $('#' + event.target.id).children('span').first().addClass('deactive');
    }

    _handleOnchange(event){
        console.log(event.target.value);
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
                                <Node node={node} handleOnclick={this._handleClick} handleOnchange={this._handleOnchange} handleMouseLeave={this._handleMouseLeave}/>
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