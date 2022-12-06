import React, { Component } from 'react';
import Childnot from './Childnot';
import Recentnots from './Recentnots';

class Notifications extends Component{
    static defaultProps = {
        msgs : ['a','b','c']
    }
    constructor(props){
        super(props);
        this.state = {
            count : 3,
            clicked : false
        }
        this.changeCount = this.changeCount.bind(this);
    }
    changeCount(){
        this.setState((currentState) => {
            return {
                count : currentState.clicked === false ? currentState.count - 1 : currentState.count + 1,
                clikced : !currentState.clicked
            }
        })
    }
    render(){
        return(
            <div>
                <Childnot count = {this.state.count}/>
                <Recentnots msg = {'a'} changeCount = {this.props.changeCount}/>
            </div>
        )
    }
}

export default Notifications;