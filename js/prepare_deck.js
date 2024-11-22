// define deck of cards
let deck = [ 
    {
        name: 'super-man',
        img: 'img/heros/super-man.png'
    },
    {
        name: 'batman',
        img: 'img/heros/batman.png',
    },
    {
        name: 'spider-man',
        img: 'img/heros/spider-man.png'
    },
    {
        name: 'wonder-woman',
        img: 'img/heros/wonder-woman.png'
    },
    {
        name: 'iron-man',
        img: 'img/heros/iron-man.png'
    },
    {
        name: 'captain-america',
        img: 'img/heros/captain-america.png'
    },
    {
        name: 'thor',
        img: 'img/heros/thor.png'
    },
    {
        name: 'hulk',
        img: 'img/heros/hulk.png'
    },
    {
        name: 'black-phanter',
        img: 'img/heros/black-phanter.png'
    },
    {
        name: 'captain-marvel',
        img: 'img/heros/captain-marvel.png'
    },
    {
        name: 'deadpool',
        img: 'img/heros/deadpool.png'
    }
]

let trap_cards = [
    {
        name: 'lost_turn',
        img: 'img/traps/lost_turn.png',
    },
    {
        name: 're-shuffle',
        img: 'img/traps/shuffle.png',
    },
    {
        name: 'lost-points',
        img: 'img/traps/lost_point.png',
    }
    
]

//generate random number 
function random_number(max){
    return Math.floor(Math.random() * max);
}


// shuffle deck 
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//start new deck of cards based on game difficulty
function new_deck(array, difficulty){
    let = new_deck_card = [];
    if(difficulty <= 7){
        for(let i = 0; i<difficulty; i++){
            new_deck_card.push(array[i]);
        }
        return new_deck_card;
    }
    return array;
}

//duplicate deck function 
function duplicate_deck(array){
    let new_deck = [];
    for(item of array){
        new_deck.push(item);
        new_deck.push(item);
    }
    return new_deck;
}

deck = shuffle(duplicate_deck(new_deck(shuffle(deck), difficulty)));

// add trap cards to the deck 
function add_trap_cards(difficulty){
    let traps = shuffle(trap_cards);
    switch (difficulty){
        case 4:
            // add one trap
            deck.push(traps[random_number(3)]);
            break;
        case 7:
            // add two traps
            deck.push(traps[random_number(3)], traps[random_number(3)]);
            break;
        case 11:
            // add three traps
            deck = deck.concat(trap_cards);
            
    }
    return shuffle(deck);

}

add_trap_cards(difficulty);