import React, { Component } from 'react';
import Pokecard from './Pokecard'
import data from "./pokedex.json";
import './Pokedex.css';

let pokemon = data.map((x,index) => {return x})


class Pokedex extends Component {
    render() {
        return(
            <div className="Pokedex-cards">
                {data.map((p,index) => {
                    return (
                    <Pokecard 
                        id={p.id} 
                        name={p.name.english} 
                        type1={p.type[0]}
                        type2={p.type[1]}
                        hp={p.base['HP']}
                        attck={p.base['Attack']}
                        def={p.base['Defense']}
                        spattck={p.base['Sp. Attack']}
                        spdef={p.base['Sp. Defense']}
                        speed={p.base['Speed']} />
                )})}
            
            </div>
        )
    }
}

export default Pokedex;