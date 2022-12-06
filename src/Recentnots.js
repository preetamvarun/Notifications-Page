import React, { Component } from 'react';
import './Recentnots.css';

class Recentnots extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.backgroundChange = this.backgroundChange.bind(this);
    }
    backgroundChange(){
        this.props.changeBck(this.props.msg);
    }
    handleClick(evt){
        this.backgroundChange();
    }
    render(){
        return(
            <div className = 'Recentnots' 
                style = {{backgroundColor : this.props.bckColor}}
                onClick = {this.handleClick}> 
                {this.props.msg} 
            </div>
        )
    }
}

export default Recentnots;