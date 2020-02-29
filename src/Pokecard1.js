import React, { Component } from 'react';
import data from "./pokedex.json";
import './Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let self = data.map((x,index) => {return x})
class Pokecard extends Component {
    render() {
        return (
            <div className="Pokecard">
                <h1>{self[188].name.english}</h1>
                <img src = {POKE_API + self[188].id + '.png'} alt = {self[188].name.english}/>
                <div>Type: {self[188].type[0]} {self[188].type[1]}</div>
                <div>Stats: </div>
                <div>HP: {self[188].base['HP']}</div>
                <div>Attack: {self[188].base['Attack']}</div>
                <div>Defense: {self[188].base['Defense']}</div>
                <div>Sp. Attack: {self[188].base['Sp. Attack']}</div>
                <div>Sp. Defense: {self[188].base['Sp. Defense']}</div>
                <div>Speed: {self[188].base['Speed']}</div>
                <div>
                    {data.map((x, index) => {
                        return (<div>
                        <h2>{x.name.english}</h2>
                        <img src = {POKE_API + x.id + '.png'} alt = {x.name.english}/>
                        <div>Type: {x.type[0]} {x.type[1]}</div>
                        <div>Stats: </div>
                        <div>HP: {x.base['HP']}</div>
                        <div>Attack: {x.base['Attack']}</div>
                        <div>Defense: {x.base['Defense']}</div>
                        <div>Sp. Attack: {x.base['Sp. Attack']}</div>
                        <div>Sp. Defense: {x.base['Sp. Defense']}</div>
                        <div>Speed: {x.base['Speed']}</div>
                        </div>
                    )})}
                </div>
            </div>
        )
    }
}

export default Pokecard;