import React from "react";
import {Link} from "react-router-dom";
/*  props:
        title: food name
        currStep: step number
        numSteps: total number of steps
        stepDescription: content of step
        time
        calories
        imgUrl
*/     
export default class StepsPage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <section className="hero is-dark is-fullheight hero-parent">
                <div className="steps-bg"></div>
                <div className="hero-body mx-0 my-0 px-0 py-0" >
                    <div className="container columns is-fluid is-centered mx-4 my-0 px-1 py-0">
                        <div className="steps-page columns is-gapless">
                        <div className="steps-button">
                            <Link to="/"><button class="button is-rounded is-medium">Home</button></Link>
                        </div>
                            <img className="step-image column is-half is-hidden-touch" src={this.props.imgUrl}></img>
                            <div className="column is-half">
                                <div className="right-column">
                                    <p className="step-food is-vcentered">{this.props.title}</p> <p style={{fontSize: "calc(1.4em + .05vw)",fontWeight:"normal"}}className="step-food">Time: {Math.floor(this.props.time/60) > 0 ? `${Math.floor(this.props.time/60)} hrs` : ''} {this.props.time % 60} mins | {this.props.calories} calories</p><hr style={{borderTop: "4px solid black"}}></hr>
                                    <p className="step-food has-text-centered">Step {this.props.currStep}/{this.props.numSteps}</p>
                                    <p className="step-steps has-text-centered" style={{fontWeight: "normal"}}>{this.props.stepDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div className="left-arrow">
                        <button class="button is-large is-rounded">
                            <span class="icon is-large">
                                <i class="fas fa-arrow-left fa-lg"></i>
                            </span>
                        </button>
                        </div>
                        <div className="right-arrow">
                            <button class="button is-large is-rounded">
                                <span class="icon is-large">
                                    <i class="fas fa-arrow-right fa-lg"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
    </section>
        )
    }
}