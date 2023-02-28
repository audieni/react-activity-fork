export interface Pokemon {
    name: string,
    level: number,
    health: number,
    damage: number,
    image: string
}

// Why do we use interface instead of a class or a object? - Enforce contract