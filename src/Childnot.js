import React, { Component } from 'react';
import './Childnot.css';

class Childnot extends Component{
    render(){
        return(
            <div>
                <div className='noteCount'>
                    <div>
                        <p><b>Notifications</b></p>
                        <span>3</span>
                    </div>
                    <a href = "/#">Mark all as read</a>
                </div>
            </div>
        )
    }
}

export default Childnot;