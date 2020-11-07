import React from 'react';   
     
export default class TimerInput extends React.Component {
    render() {             
        return (
            <div class="display-timer">  
                <div class="time-input field is-grouped">
                    <p class="control">
                    <h3 class="countdown-display">{this.props.minutes}:{this.props.seconds}</h3> 
                    <input class="minutes-input input" type="number" max="999" min="0" oninput="validity.valid||(value='');" placeholder="00" minutes={this.props.minutes} inputMinutes={this.props.inputMinutes} onChange={this.props.handleChangeMinutes} required />
                    <input class="seconds-input input" type="number" max="59" min="0" oninput="validity.valid||(value='');" placeholder="00" seconds={this.props.seconds} inputSeconds={this.props.inputSeconds} onChange={this.props.handleChangeSeconds} required />
                    <button class="start-stop button" onClick={this.props.active ? this.props.pauseCountDown : this.props.startCountDown}>{this.props.active ? 'STOP' : 'START'}</button>
                    <button class="reset button" onClick={this.props.resetCountDown}>RESET</button> 
                    </p>
                    </div>
            </div>     
        );    
    } 
}
     