import React, { Component } from 'react';
import Childnot from './Childnot';
import Recentnots from './Recentnots';

class Notifications extends Component{
    constructor(props){
        super(props);
        this.state = {
            track : [
            {bckColor : 'grey', time : '1m ago', name : 'Mark Webber', msg1 : 'Reacted to your recent post', msg2 : 'My first tournament today!', path : 'mark-webber'},
            {bckColor : 'grey', time : '5m ago', name : 'Angela Gray', msg1 : 'Followed you', msg2 : null, path : 'angela-gray'},
            {bckColor : 'grey', time : '1day ago', name : 'Jacob Thompson', msg1 : 'has joined your group', msg2 : 'Chess Club', path : 'jacob-thompson'}],
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
    changeBck(name){
        let IncCount;
        let newTrack = this.state.track;
        newTrack.forEach((obj) => {
            if(obj.name === name){
                obj.bckColor = obj.bckColor === 'grey' ? 'white' : 'grey';
                IncCount = obj.bckColor === 'white' ? false : true;
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
        <Recentnots bckColor = {eachObj.bckColor} name = {eachObj.name} 
        changeBck = {this.changeBck} key = {eachObj.name} time = {eachObj.time}
        msg1 = {eachObj.msg1} msg2 = {eachObj.msg2} path = {eachObj.path}
        />)
        return(
            <div>
                <Childnot count = {this.state.count} clearNots = {this.clearNots}/>
                {divs}
            </div>
        )
    }
}

export default Notifications;