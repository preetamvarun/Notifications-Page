import React, { Component } from 'react';
import './Recentnots.css';

class Recentnots extends Component{
    render(){
        return(
            <div className = 'Recentnots'
            style = {{
                backgroundColor : {this.props.bckColor}
            }} onClick = {this.handleClick}> {this.props.msg} </div>
        )
    }
}

export default Recentnots;