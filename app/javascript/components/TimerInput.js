import React from 'react';   
//import '../../assets/stylesheets/timer.scss';
     
export default class TimerInput extends React.Component {
    render() {              
        return (
            <div class="columns is-vcentered time-display"> 
                <div class="column is-one-fifth">
                    <p class="countdown-display is-size-2-desktop is-size-3-tablet is-size-4-mobile">{this.props.minutes}:{this.props.seconds}</p>
                </div>
                <div class="column is-vcentered is-two-fifths">
                    <input class="minutes-input input" type="number" max="999" min="0" oninput="validity.valid||(value='');" placeholder="00" minutes={this.props.minutes} inputMinutes={this.props.inputMinutes} onChange={this.props.handleChangeMinutes} required />
                    <input class="seconds-input input" type="number" max="59" min="0" oninput="validity.valid||(value='');" placeholder="00" seconds={this.props.seconds} inputSeconds={this.props.inputSeconds} onChange={this.props.handleChangeSeconds} required />
                </div>
                <div class="column is-two-fifths">
                    <button class="start-stop button" onClick={this.props.active ? this.props.pauseCountDown : this.props.startCountDown}>{this.props.active ? 'STOP' : 'START'}</button>
                    <button class="reset button" onClick={this.props.resetCountDown}>RESET</button>                     
                </div>
            </div>   
        );    
    }  
}
     