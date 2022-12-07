import React, { Component } from 'react';
import Childnot from './Childnot';
import Recentnots from './Recentnots';

class Notifications extends Component{
    constructor(props){
        super(props);
        this.state = {
            track : [
            {stateful : true, bckColor : 'hsl(211, 38%, 94%)', time : '1m ago', name : 'Mark Webber', msg1 : 'Reacted to your recent post', msg2 : 'My first tournament today!', path : 'mark-webber'},
            {stateful : true, bckColor : 'hsl(211, 38%, 94%)', time : '5m ago', name : 'Angela Gray', msg1 : 'Followed you', msg2 : null, path : 'angela-gray'},
            {stateful : true, bckColor : 'hsl(211, 38%, 94%)', time : '1 day ago', name : 'Jacob Thompson', msg1 : 'has joined your group', msg2 : 'Chess Club', path : 'jacob-thompson'},
            {stateful : false, bckColor : 'white', time : '5 days ago', name : 'rizky hasanuddin', msg1 : 'sent you a private message', msg2 : null, path : 'rizky-hasanuddin'},
            {stateful : false, bckColor : 'white', time : '1 week ago', name : 'kimberly smith', msg1 : 'commented on your picture', msg2 : null, path : 'kimberly-smith'},
            {stateful : false, bckColor : 'white', time : '2 weeks ago', name : 'Nathan Peterson', msg1 : 'reacted to your recent post', msg2 : '5 end-game strategies to increase your win rate', path : 'nathan-peterson'},
            {stateful : false, bckColor : 'white', time : '2 weeks ago', name : 'anna kim', msg1 : 'left the group', msg2 : 'Chess Club', path : 'anna-kim'}
        ],
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
                obj.bckColor = obj.bckColor === 'hsl(211, 38%, 94%)' ? 'white' : 'hsl(211, 38%, 94%)';
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
        <Recentnots 
        bckColor = {eachObj.bckColor} name = {eachObj.name} changeBck = {this.changeBck} 
        key = {eachObj.name} time = {eachObj.time} msg1 = {eachObj.msg1} 
        msg2 = {eachObj.msg2} path = {eachObj.path} stateful = {eachObj.stateful}
        />)
        return(
            <div style = {{backgroundColor : 'white', padding : '1rem', margin : '1rem 0rem', 
        boxShadow : '.75px .75px 6px grey', borderRadius : '5px'}}>
                <Childnot count = {this.state.count} clearNots = {this.clearNots}/>
                {divs}
            </div>
        )
    }
}

export default Notifications;