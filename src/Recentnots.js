import React, { Component } from 'react';
import './Recentnots.css';

class Recentnots extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.backgroundChange = this.backgroundChange.bind(this);
    }
    backgroundChange(){
        this.props.changeBck(this.props.name);
    }
    handleClick(evt){
        this.backgroundChange();
    }
    render(){
        return(
            <div className = 'Recentnots' 
                style = {{backgroundColor : this.props.bckColor}}
                onClick = {this.handleClick}> 
                <p>{this.props.name} {this.props.msg1} <b>{this.props.msg2}</b></p>
                <p>{this.props.time}</p>
            </div>
        )
    }
}

export default Recentnots;