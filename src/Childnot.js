import React, { Component } from 'react';
import './Childnot.css';

class Childnot extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.clearAllNots = this.clearAllNots.bind(this);
    }
    clearAllNots(){
        this.props.clearNots();
    }
    handleClick(){
        this.clearAllNots();
    }
    render(){
        return(
            <div>
                <div className='noteCount'>
                    <div className = 'notificationsCount'>
                        <p><b>Notifications</b></p>
                        <span>{this.props.count}</span>
                    </div>
                    <a href = "/#" onClick = {this.handleClick}>Mark all as read</a>
                </div>
            </div>
        )
    }
}

export default Childnot;