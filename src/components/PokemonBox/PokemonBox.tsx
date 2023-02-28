import { Pokemon } from '../models/Pokemon'

export default function PokemonBox(props: Pokemon) {
    return (
        <div>
            {/* name: string,
            level: number,
            health: number,
            damage: number,
            image: string */}

            <img src={ props.image } />
            <h4>{ props.name }</h4>
            <p>Level: { props.level }</p>
            <p>Health: { props.health }</p>
            <p>Damage: { props.damage }</p>
        </div>
    )
}