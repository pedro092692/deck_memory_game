// define deck of cards
deck = [ 
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

wildcard = [
    {
        name: 'one shot',
        img: 'img/heros/deadpool'
    }
]

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

// draw the deck
function draw_the_board(){
    const board = document.getElementById('deck');
    let cards = '';
    for(let card of deck){
        cards += `<div class='${card.name}'> <img src='${card.img}' alt='${card.name}' height='110'> </div>`;
    }
    board.innerHTML = cards;
}

//game events

//deal cards
draw_the_board();


