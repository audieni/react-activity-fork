import { useState } from 'react';
import { Pokemon } from '../../models/Pokemon';
import { PokeAPI } from '../../models/PokeAPI';
import PokemonBox from '../PokemonBox/PokemonBox';
import axios from 'axios';

function PokemonList() {
    const newPokemon: Pokemon = {
        name: '',
        level: 0,
        health: 0,
        damage: 0,
        image: ''
    }

    const [listOfPokemons, setListPoke] = useState<Pokemon[]>([
        {
            name: 'Ditto',
            level: 3,
            health: 100,
            damage: 20,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        },
        {
            name: 'Pikachu',
            level: 5,
            health: 400,
            damage: 10,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        }
    ]);

    function onSubmitP(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(listOfPokemons);
        
        // when you click on the button to submit
        // send request using Axios
        // Axios is going to grab the information from the PokeAPI and store it 
        axios.get<PokeAPI>(`https://pokeapi.co/api/v2/pokemon/${newPokemon.name}`)
            .then((response) => {
                console.log(response.data);

                let myPoke: Pokemon = {
                    name: response.data.name,
                    level: 0,
                    health: response.data.stats[0].base_stat,
                    damage: response.data.stats[1].base_stat,
                    image: response.data.sprites.front_default
                }

                setListPoke([myPoke, ...listOfPokemons]);
            }
        )
    }

    function setNameP(event: React.ChangeEvent<HTMLInputElement>) {
        newPokemon.name = event.target.value;
    }

    function onRemove(name: string) {
        setListPoke([...listOfPokemons].filter((data) => data.name !== name));
    }

    return (
        // <></> - this is a react fragment, essentially a empty div
        <div>
            <h3>Add Pokemon via PokeAPI</h3>
            <form className='grid' onSubmit={ onSubmitP }>
                <label>Name</label>
                <input type='text' onChange={ setNameP }></input>
                <br />
                <input type='submit'></input>
            </form>

            <h2>PokemonList</h2>
            <div className="grid-pokemon">
                {
                    listOfPokemons.map((poke) => {
                        return (
                            <div key={ poke.name }>
                                <PokemonBox { ...poke } />
                                <button onClick={ () => onRemove(poke.name) }>Delete {poke.name}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PokemonList;