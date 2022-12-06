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
                onClick = {this.props.stateful && this.handleClick}> 
                <img src = {require(`./images/avatar-${this.props.path}_png.png`)} alt = {this.props.name}/>
                <div>
                    <p><b>{this.props.name}</b> {this.props.msg1} <b>{this.props.msg2}</b></p>
                    <p>{this.props.time}</p>
                    {this.props.name === 'rizky hasanuddin' && 
                    <p>Hello, Thanks for setting up the chess club. I've been a member for 
                    few week now and I am already 
                    having lot's of fun besides improving my game.</p>
                    }
                </div>
            </div>
        )
    }
}

export default Recentnots;