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
            track : [{msg : 'a', bckColor : 'grey'},
            {msg : 'b',bckColor : 'grey'},{msg : 'c',bckColor : 'grey'}],
            count : 3
        }
        this.changeBck = this.changeBck.bind(this);
        this.clearNots = this.clearNots.bind(this);
    }
    clearNots(){
        let clearTrack = this.state.track;
        clearTrack.forEach((obj) => {
            obj.bckColor = 'white';
        })
        this.setState(() => {
            return {
                count : 0
            }
        })
        this.setState(() => {
            return {
                track : clearTrack
            }
        })
    }
    changeBck(msg){
        let IncCount;
        let newTrack = this.state.track;
        newTrack.forEach((obj) => {
            if(obj.msg === msg){
                obj.bckColor = obj.bckColor === 'grey' ? 'white' : 'grey';
                IncCount = obj.bckColor === 'white' ? false : true 
            }
        })
        this.setState((curState) => {
            return {
                count : IncCount ? curState.count + 1 : curState.count - 1
            }
        })
        this.setState({
            track : newTrack
        })
    }
    render(){
        const divs = this.state.track.map((eachObj) => 
        <Recentnots bckColor = {eachObj.bckColor} msg = {eachObj.msg} changeBck = {this.changeBck} key = {eachObj.msg}/>
        )
        return(
            <div>
                <Childnot count = {this.state.count} clearNots = {this.clearNots}/>
                {divs}
            </div>
        )
    }
}

export default Notifications;