import React from 'react';  

export default class TimerInput extends React.Component {
    render() {      
        return (
            <div class="display-timer">  
                <div class="field is-grouped is-grouped-right time-input">
                    <h3 class="is-size-3-desktop is-size-4-tablet is-size-6-mobile countdown-display">{this.props.minutes}:{this.props.seconds}</h3> 
                    <input class="input minutes-input" type="number" max="999" min="0" oninput="validity.valid||(value='');" placeholder="00" minutes={this.props.minutes} inputMinutes={this.props.inputMinutes} onChange={this.props.handleChangeMinutes} required />
                    <input class="input seconds-input" type="number" max="59" min="0" oninput="validity.valid||(value='');" placeholder="00" seconds={this.props.seconds} inputSeconds={this.props.inputSeconds} onChange={this.props.handleChangeSeconds} required />
                    <button class="button start-stop" onClick={this.props.active ? this.props.pauseCountDown : this.props.startCountDown}>{this.props.active ? 'STOP' : 'START'}</button>
                    <button class="button reset" onClick={this.props.resetCountDown}>RESET</button> 
                </div>
            </div>    
        );    
    }
}
