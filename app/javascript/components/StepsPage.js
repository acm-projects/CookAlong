import React from "react";
import Header from "./Header";   
import {Link} from "react-router-dom";
import InstructionsQuery from "./InstructionQuery.js";
import Timer from "./Timer.js";                 
    
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

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = false;

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
        this.image = global.config.LOADING_IMAGE;
        this.directions = ["Loading..."];
        this.ingredients = ["Loading..."];
        this.renderedIngredients = null;

        this.recipeID = this.props.match.params.id;

        this.rightButtonPressed = this.rightButtonPressed.bind(this);
        this.leftButtonPressed = this.leftButtonPressed.bind(this);
        this.micButtonPressed = this.micButtonPressed.bind(this);
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
        this.ingredients = recipeInfo["ingredients"];
        this.renderedIngredients = () => this.renderedIngredients;
        this.directions = recipeInfo["directions"];

        this.setState({loading: false});

        let utter = new SpeechSynthesisUtterance(this.directions[this.state.currentStep-1]);
        textToSpeech.speak(utter);
<<<<<<< HEAD
=======

        var clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
          });

        var element = document.getElementById('mic');
        var cancelled = !element.dispatchEvent(clickEvent);
    }

    componentDidUpdate(){
>>>>>>> 56c586b7d24e399af45d371c3ef01c9cc8a66dcb
        
        var clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
          });

        var element = document.getElementById('mic');
        var cancelled = !element.dispatchEvent(clickEvent);
    }

    renderIngredients(){
        let ingredients = this.ingredients.map((ingredient) => {return <div className="box"><article className="media"><div className="media-content"><p><strong>{ingredient}</strong></p></div></article></div>});
        return ingredients;
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

    micButtonPressed(){
        recognition.start();
        recognition.onresult = (event) => {
            //var last = event.results.length - 1;
            //var command = event.results[last][0].transcript;
            var command = event.results[0][0].transcript;
            console.log(command)
            if(command.toLowerCase() === 'next'){
                this.rightButtonPressed()
                
            }
            else if (command.toLowerCase() === 'back'){
                this.leftButtonPressed()
            }
            else if (command.toLowerCase() === 'repeat'){
                this.speak(this.directions[this.state.currentStep-1]);
            }
            else if (command.toLowerCase() === 'remaining'){
                this.speak(this.numSteps-this.currentStep);
            }
            else {
                this.speak("command not recognized, please try again");
            }
            
        }
        recognition.onsoundend = () => setTimeout(() => {
            var clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
              });
    
            var element = document.getElementById('mic');
            var cancelled = !element.dispatchEvent(clickEvent);
            
        },1000)


    }

    speak(text){
        let utter = new SpeechSynthesisUtterance(text);
        utter.rate = 1.5;
        textToSpeech.speak(utter);
        textToSpeech.cancel()

        // after step is said, wait 1 second and restart tts 
        setTimeout(() => {
            var clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
              });
    
            var element = document.getElementById('mic');
            var cancelled = !element.dispatchEvent(clickEvent);
            
        },1000)
    }

    render() {
        return(
            <section className="hero is-dark is-fullheight hero-parent disable-scrollbars">
                <Header />
                <div className="steps-bg"></div>
                <div className="hero-body mx-0 my-0 px-0 py-0" >
                    <div className="container columns is-fluid is-centered mx-4 my-0 px-1 py-0">
                        <div className="steps-page columns is-gapless">
                            <div className="steps-button"></div>
                            <div className="column is-half">
                                <img className="step-image is-hidden-touch is-square" src={this.image}></img>
                                <div className="ingredient-list is-hidden-touch columns is-multiline disable-scrollbars">{this.ingredients.map((ingredient) => {return <div className="box column is-four-fifths"><article className="media"><div className="media-content"><p><strong>{ingredient}</strong></p></div></article></div>})}</div>
                            </div> 
                            <div className="column is-half">
                                <div className="right-column">
                                    <p className="step-food is-vcentered">{this.title}</p> <p style={{fontSize: "calc(1.4em + .05vw)",fontWeight:"normal"}}className="step-food">Time: {Math.floor(this.time/60) > 0 ? `${Math.floor(this.time/60)} hrs` : ''} {this.time % 60} mins | {this.calories} calories</p><hr style={{borderTop: "4px solid black"}}></hr>
                                    <p className="step-food has-text-centered">Step {this.state.currentStep}/{this.numSteps}</p>
                                    <p className="step-steps has-text-centered" style={{fontWeight: "normal"}}>{this.directions[this.state.currentStep-1]}</p>
                                </div>
                            </div>    
                        </div>
                        <div class="timer-component">
                            <Timer /> 
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
                        <div className="mic-but">
                            <button id="mic" style={{display: 'none'}} class="button is-small is-rounded" onClick={this.micButtonPressed}>
                                <span class="icon is-medium">
                                    <i class="fas fa-microphone"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
        </section>
        )
    } 
}
         