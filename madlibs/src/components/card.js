import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    color: '',//1
    pluralNoun: '',//2
    adjectiveOne:'',//3
    celebOne: '',//4
    adjectiveTwo: '',//5
    nounOne: '',//6
    numberOne: '',//7
    numberTwo: '',//8
    nounTwo: '',//9
    adjectiveThree: '',//10
    celebTwo: '',//11
    celebThree: '',//12
    adjectiveFour: '', //13
    nounThree: '', //14
    celebFour: '', //15
    adjectiveFive: '', //16 Done!
    contentVisible:false,
}

class Card extends Component {
    
    constructor() {
        super()

        this.state = {
            color: '',//1
            pluralNoun: '',//2
            adjectiveOne:'',//3
            celebOne: '',//4
            adjectiveTwo: '',//5
            nounOne: '',//6
            numberOne: '',//7
            numberTwo: '',//8
            nounTwo: '',//9
            adjectiveThree: '',//10
            celebTwo: '',//11
            celebThree: '',//12
            adjectiveFour: '', //13
            nounThree: '', //14
            celebFour: '', //15
            adjectiveFive: '', //16 Done!
            contentVisible:false,

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        if(this.state.contentVisible) {
            this.setState (INITIAL_STATE)
        } else {
            this.setState({contentVisible: true})
        }
    }
    
    render() {

        const inputData = [
            {title:'Color', state: this.state.color, name:'color'},//1
            {title:'Plural Noun', state: this.state.pluralNoun, name:'pluralNoun'},
            {title:'Adjective', state: this.state.adjectiveOne, name:'adjectiveOne'},
            {title:'Celebrity', state: this.state.celebOne, name:'celebOne'},//4 Finished!

            {title:'Adjective', state: this.state.adjectiveTwo, name:'adjectiveTwo'},//5
            {title:'Noun', state: this.state.nounOne, name:'nounOne'},
            {title:'Number', state: this.state.numberOne, name:'numberOne'},
            {title:'Number', state: this.state.numberTwo, name:'numberTwo'},//8 Finished!

            {title:'Noun', state: this.state.nounTwo, name:'nounTwo'},//9
            {title:'Adjective', state: this.state.adjectiveThree, name:'adjectiveThree'},
            {title:'Celebrity', state: this.state.celebTwo, name:'celebTwo'},
            {title:'Celebrity', state: this.state.celebThree, name:'celebThree'},//12 Finished!

            {title:'Adjective', state: this.state.adjectiveFour, name:'adjectiveFour'},//13
            {title:'Noun', state: this.state.nounThree, name:'nounThree'},
            {title:'Celebrity', state: this.state.celebFour, name:'celebFour'},
            {title:'Adjective', state: this.state.adjectiveFive, name:'adjectiveFive'},//16 Finished!
        ]


        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                    {
                        inputData.map( (data, index) => {
                        return Input( (data), this.handleInputChange, index) })
                    }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : '' //render nothing you cuck i s2g
                }
            </form>
        )
    }
}

export default Card;