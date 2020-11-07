import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import TimerInput from './TimerInput';
import "../../assets/stylesheets/timer.scss";
  
export default class Timer extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            seconds: '00',
            minutes: '00', 
            inputSeconds: '00',
            inputMinutes: '00',
            minutesRemaining: '00',
            active: false,
            finished: false,
            firstTime: true,
        };

        // bind the method to the constructor 
        this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
        this.handleChangeSeconds = this.handleChangeSeconds.bind(this);
        this.pauseCountDown = this.pauseCountDown.bind(this);

        // countdown functionality
        this.secondsRemaining;
        this.intervalHandle;
        this.startCountDown = this.startCountDown.bind(this);
        this.resetCountDown = this.resetCountDown.bind(this);
        this.tick = this.tick.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
    }

    playAudio() {
        const AudioEl = document.getElementsByClassName("audio-element")[0];
        AudioEl.play();
    }

    pauseAudio() {
        const AudioEl = document.getElementsByClassName("audio-element")[0];
        AudioEl.pause();
    }

    handleChangeMinutes(event) {
        if(!this.state.active){
            let minStr = "";
            if(event.target.value < 10)
            {
                minStr = "0";
            }
            minStr += event.target.value;
            this.setState({
                minutes: minStr,
                inputMinutes: minStr,
                minutesRemaining: minStr
            });
        }
    }

    handleChangeSeconds(event) {
        if(!this.state.active) {
            let secStr = "";
            if(event.target.value < 10)
            {
                secStr = "0";
            }
            secStr += event.target.value;

            this.setState({
                seconds: secStr,
                inputSeconds: secStr
            }); 
        }
    }
          
    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);

        this.setState({
            minutes: min,
            seconds: sec,
        });

        if(min < 10) {
            this.setState({
                minutes: "0" + min,
            });
        }

        if(sec < 10) {
            this.setState({
                seconds: "0" + sec,
            });
        }

        if(min <= 0 & sec <= 0) {
            clearInterval(this.intervalHandle);
            this.setState({
                finished: true,
            });
            this.playAudio();  
        }

        this.secondsRemaining--;
    }

    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);

        var minStr = this.state.minutes + "";
        if(minStr.charAt(0) == 0 && (minStr.charAt(1) == 0 || minStr.charAt(1) < 10)) {
            minStr = minStr.substring(1);
        } 

        var secStr = this.state.seconds + "";
        if(secStr.charAt(0) == 0 && (secStr.charAt(1) == 0 || secStr.charAt(1) < 10)) {
            secStr = secStr.substring(1);
        }

        this.secondsRemaining = (minStr * 60) + (secStr * 1) - 1;

        if(this.secondsRemaining > 0) {
            this.setState({
                active: true,
            });
        }

        if(this.secondsRemaining <= 0) {
            clearInterval(this.intervalHandle);
            this.setState({
                finished: true,
            });
            this.playAudio();
        }
    }

    pauseCountDown() {  
        clearInterval(this.intervalHandle);   
        this.secondsRemaining = 0;
        this.setState({
            active: false,
            seconds: this.state.seconds,
            minutes: this.state.minutes, 
            firstTime: false,        
        });
        if(this.state.finished) {
            this.pauseAudio();
        }
    }

    resetCountDown() {
        this.secondsRemaining = 0;
        clearInterval(this.intervalHandle);
        this.setState({
            seconds: this.state.inputSeconds,
            minutes: this.state.inputMinutes,
            active: false,
            firstTime: true,
        });
        if(this.state.finished) {
            this.pauseAudio(); 
        }
    }

    render() {
        return (   
            <div>
                <audio className="audio-element" loop>
                    <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
                </audio>
                <div class="timer-container">  
                    <TimerInput minutes={this.state.minutes}     
                                seconds={this.state.seconds}
                                inputMinutes={this.state.inputMinutes}
                                inputSeconds={this.state.inputSeconds}
                                handleChangeMinutes={this.handleChangeMinutes}
                                handleChangeSeconds={this.handleChangeSeconds}
                                pauseCountDown={this.pauseCountDown}
                                active={this.state.active}
                                startCountDown={this.startCountDown} 
                                resetCountDown={this.resetCountDown} />
                </div>
            </div>
        );
    }
}
