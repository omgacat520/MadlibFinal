import React, { Component } from 'react';

import Input from './input';
import Content from './content';

class Card extends Component {
    
    constructor() {
        super()

        this.state = {
            color: '',//1
            pluralNoun: '',//2
            adjectiveOne:'',//3
            celebOne: '',//4
            adjectiveTwo: '',//5
            noun: '',//6
            number: '',//7
            numberTwo: '',//8
            nounTwo: '',//9
            adjectiveThree: '',//10
            celebTwo: '',//11
            celebThree: '',//12
            adjectiveFour: '', //13
            nounThree: '', //14
            celebFour: '', //15
            adjectiveFive: '', //16 Done!

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        const inputData = [
            {title:'Color', state: this.state.color, name:'color'},//1
            {title:'Plural Noun', state: this.state.pluralNoun, name:'pluralNoun'},
            {title:'Adjective', state: this.state.adjectiveOne, name:'adjective One'},
            {title:'Celebrity', state: this.state.celebOne, name:'celebOne'},//4 Finished!

            {title:'Adjective', state: this.state.adjectiveTwo, name:'adjective Two'},//5
            {title:'Noun', state: this.state.noun, name:'noun'},
            {title:'Number', state: this.state.number, name:'number'},
            {title:'Number', state: this.state.numberTwo, name:'numberTwo'},//8 Finished!

            {title:'Noun', state: this.state.nounTwo, name:'nounTwo'},//9
            {title:'Adjective', state: this.state.AdjectiveThree, name:'Adjective Three'},
            {title:'Celebrity', state: this.state.celebTwo, name:'celebTwo'},
            {title:'Celebrity', state: this.state.celebThree, name:'celebThree'},//12 Finished!

            {title:'Adjective', state: this.state.adjectiveFour, name:'adjective Four'},//13
            {title:'Noun', state: this.state.nounThree, name:'nounThree'},
            {title:'Celebrity', state: this.state.celebFour, name:'celebFour'},
            {title:'Adjective', state: this.state.adjectiveFive, name:'adjective Five'},//16 Finished!
        ]


        return (
            <div className="card">
                {
                    inputData.map(data => Input( (data), this.handleInputChange ))
                }
                <Content data={this.state}/>
            </div>
        )
    }
}

export default Card;