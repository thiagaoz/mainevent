export type Item = {
    name: string,
    type: string,
    cost: number,
    quantity?: number,
    code: string
}

export type Weapon = {
    hands: number,
    name: string,
    type: string,
    cost: number,
    quantity?: number,
    code: string
}

export const items = {
    empty:{
        name:'Empty',
        type:'default',
        cost: 0,
        code:'default'
    },
    hide:{
        name: 'Hide armor',
        type: 'Armor',
        defense: 3,
        cost: 20,
        code:'hide'
    },
    chain:{
        name: 'Chainmail',
        type: 'Armor',
        defense: 5,
        cost: 50,
        code:'chain'
    },
    longsword:{
        name: 'Longsword',
        type: 'Weapon',
        damage: 6,
        cost: 10,
        hands: 1,
        code:'longsword'
    },
    greataxe:{
        name:'Greataxe',
        type:'Weapon',
        damage: 10,
        cost: 20,
        hands: 2,
        code:'greataxe'
    },
    shield:{
        name:'Equipped',
        type:'Shield',
        defense: 2,
        cost:10,
        hands:1,
        code:'shield'
    },
    noShield:{
        name:'None',
        cost:0,
        hands: 0,
        code:'noShield',
        type:'Shield'
    },
    potion:{
        name:'Healing Potion',
        type:'Potion',
        cost: 10,
        heal: 5,
        code:'healingPotion'
    }
}