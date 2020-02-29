import React, { Component } from 'react';
import data from "./pokedex.json";
import './Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);


let self = data.map((x,index) => {return x})
class Pokecard extends Component {
    render() {
        
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
				<div className="Pokecard-image">
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<div className="Pokecard-data">Type: {this.props.type1} {this.props.type2}</div>
				<div className="Pokecard-data">HP          : {this.props.hp}</div>
                <div className="Pokecard-data">Attack      : {this.props.attck}</div>
                <div className="Pokecard-data">Defense     : {this.props.def}</div>
                <div className="Pokecard-data">Sp. Attack  : {this.props.spattck}</div>
                <div className="Pokecard-data">Sp. Defense : {this.props.spdef}</div>
                <div className="Pokecard-data">Speed       : {this.props.speed}</div>
            </div>
        )
    }
}

export default Pokecard;