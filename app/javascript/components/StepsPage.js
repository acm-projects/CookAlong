import React from "react";
import {Link} from "react-router-dom";
import InstructionsQuery from "./InstructionQuery.mjs"
/*  props:
        title: food name
        currStep: step number
        numSteps: total number of steps
        stepDescription: content of step
        time
        calories
        imgUrl
*/     
const textToSpeech = window.speechSynthesis;
export default class StepsPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {loading: true};
        this.state = {currentStep: 1};

        this.title = "Loading...";
        this.numSteps = 0;
        this.stepDescription = "Loading...";
        this.time = 0;
        this.calories = 0;
        this.image = "";
        this.directions = ["Loading..."];

        this.recipeID = this.props.match.params.id;

        this.rightButtonPressed = this.rightButtonPressed.bind(this);
        this.leftButtonPressed = this.leftButtonPressed.bind(this);
    }

    async componentDidMount() {
        this.searchObject = new InstructionsQuery(this.recipeID);
        await this.searchObject.getSearchResult();

        const recipeInfo = await this.searchObject.parse();

        this.title = recipeInfo["recipeTitle"];
        this.numSteps = recipeInfo["numSteps"];
        this.image = recipeInfo["image"];
        this.time = recipeInfo["time"];
        this.calories = recipeInfo["numCalories"];

        this.directions = recipeInfo["directions"];

        this.setState({loading: false});

        let utter = new SpeechSynthesisUtterance(this.directions[this.state.currentStep-1]);
        textToSpeech.speak(utter);
    }

    componentDidUpdate(){
        
    }

    rightButtonPressed() {
        if(this.state.currentStep < this.numSteps) {
            this.setState({currentStep: this.state.currentStep + 1}, () => this.speak(this.directions[this.state.currentStep-1]))
        }
    }

    leftButtonPressed() {
        if(this.state.currentStep > 1) {
            this.setState({currentStep: this.state.currentStep - 1}, () => this.speak(this.directions[this.state.currentStep-1]))
        }
    }

    speak(text){
        textToSpeech.cancel()
        let utter = new SpeechSynthesisUtterance(text);
        utter.rate = 1.5;
        textToSpeech.speak(utter);
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
                            <img className="step-image column is-half is-hidden-touch is-square" src={this.image}></img>
                            <div className="column is-half">
                                <div className="right-column">
                                    <p className="step-food is-vcentered">{this.title}</p> <p style={{fontSize: "calc(1.4em + .05vw)",fontWeight:"normal"}}className="step-food">Time: {Math.floor(this.time/60) > 0 ? `${Math.floor(this.time/60)} hrs` : ''} {this.time % 60} mins | {this.calories} calories</p><hr style={{borderTop: "4px solid black"}}></hr>
                                    <p className="step-food has-text-centered">Step {this.state.currentStep}/{this.numSteps}</p>
                                    <p className="step-steps has-text-centered" style={{fontWeight: "normal"}}>{this.directions[this.state.currentStep-1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="left-arrow">
                        <button class="button is-large is-rounded" onClick={this.leftButtonPressed}>
                            <span class="icon is-large">
                                <i class="fas fa-arrow-left fa-lg"></i>
                            </span>
                        </button>
                        </div>
                        <div className="right-arrow">
                            <button class="button is-large is-rounded" onClick={this.rightButtonPressed}>
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