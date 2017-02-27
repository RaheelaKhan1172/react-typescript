/* Root Component -- manages active state, minutes, and seconds 
   Calls Button component with display and onClick props 
   Expects Button component to call onClick callback in order to
   update relevant state */

import * as React from "react";

import { Button } from "./Button";
import {  ITimerState } from "./iPomoClockProps";
import { styles } from "./Container.js";


export class Timer extends React.Component<{}, ITimerState> {
  constructor(props: any, public initialStart: boolean = false, public timer: any = null) {
    super(props);
    
    this.initialStart = initialStart;
    this.timer = timer;
 
    this.onPauseClick = this.onPauseClick.bind(this); 
    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onDecrementClick = this.onDecrementClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.activeTimer = this.activeTimer.bind(this);
 
    this.state = { active: false, minutes: 10, seconds: 60 };
  }

  componentWillUnmount() {
    clearInterval(this.timer);    
  }

  startTimer() {
    this.timer = setInterval( () => this.decrementTime(),1000);
    this.initialStart = false;
    this.setState( () => ({ 
      active: true
    }));
  }

  activeTimer() {
    this.setState( () => ({
      active:true
    }));
  }
  
  onPauseClick() {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  onIncrementClick() {
    if (!this.state.active) {
    this.setState((prevState,props) => ({
      minutes: prevState.minutes += 1
    }));
    }
  }

  onDecrementClick() {
    if (this.state.minutes >= 1 && !this.state.active) {
      this.setState((prevState,props) => ({ 
        minutes: prevState.minutes -=1
      }));
    }
  }
  
  resetSeconds() {
    this.setState( () => ({
      seconds: 60
    }));
  }

  decrementTime() {
    if (this.state.seconds === 0) {
      this.resetSeconds();
      this.onDecrementClick();
    } 
    if (this.state.active) {
    this.setState((prevState,props) => ({
      seconds: prevState.seconds -= 1
    }));
    }
  }

  render() {
    return (
      <div className="D(f) Jc(c) W(100%) H(1000px) Bgc(#f8f8f8)">
      <div className="Fld(c) Mt(20px) Mb(20px) P(20px)">
   
            { this.initialStart &&
        <div className="buttonGroup">
          <Button display="Start"
            onClick={this.startTimer} />
        </div> }

      { this.state.active && !this.initialStart &&
        <div className="buttonGroup">
          <Button display="Pause"
            onClick={this.onPauseClick} />
        </div>
      }
   
     { !this.state.active && !this.initialStart &&
        <div className="buttonGroup">
          <Button display="Start"
            onClick={this.activeTimer} />
        </div> }
        <div className="buttonGroup">
          <Button display="+"
            onClick={this.onIncrementClick} />
          </div>
          <div className="buttonGroup">
          <Button display="-"
            onClick={this.onDecrementClick} />
        </div>
       
        <div className="timer Px(40px)">
            <div className="minutes">
              {this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes}:
           </div>
           <div className="seconds">
               {this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}
            </div>
        </div>
      </div>
    </div>

    );
  }
};
