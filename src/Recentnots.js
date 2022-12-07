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
                onClick = {this.props.stateful ?  this.handleClick : undefined}> 
                <img src = {require(`./images/avatar-${this.props.path}_png.png`)} alt = {this.props.name}/>
                <div>
                    <p className = {this.props.bckColor === 'white' ? null : 'First'}>
                        <b style = {{color : 'black', fontWeight : '800px'}}>{this.props.name}</b> 
                        <span style={{color : 'hsl(219, 12%, 42%)'}}> {this.props.msg1}</span>
                        <b className= {this.props.msg2 === 'Chess Club' ? 'makeBlue' : 'makeGrey'}> {this.props.msg2}</b>
                    </p>
                    <p>{this.props.time}</p>
                    {this.props.name === 'rizky hasanuddin' && 
                    <p style = {{color : 'black'}}>Hello, Thanks for setting up the chess club. I've been a member for 
                    few week now and I am already 
                    having lot's of fun besides improving my game.</p>
                    }
                </div>
                {this.props.name === 'kimberly smith' && 
                <img className = "chessImage" src = {require('./images/image-chess.png')} alt = {this.props.name}/>
                }
            </div>
        )
    }
}

export default Recentnots;