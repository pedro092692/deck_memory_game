var marked_cards = [];
var id_hide;

//adjust board size based on difficulty
function board_size(difficulty){
    let board = document.getElementById('deck');
    switch (difficulty){
        case 4:
            board.style.gridTemplateColumns='repeat(3, 1fr)';
            board.style.gridTemplateRows='repeat(3, 1fr)';
            break;
        case 7:
            board.style.gridTemplateColumns='repeat(4, 1fr)';
            board.style.gridTemplateRows='repeat(4, 1fr)';
            break;
        case 11:
            board.style.gridTemplateColumns='repeat(5, 1fr)';
            board.style.gridTemplateRows='repeat(5, 1fr)';
            break;    
    }
}

// draw the deck
function draw_the_board(){
    const board = document.getElementById('deck');
    let cards = '';
    for(let card of deck){
        cards += `<div class='card'>
                    <div class='${card.name}'> <img src='${card.img}' alt='${card.name}' height='110'> </div>
                  </div>`;
    }
    board.innerHTML = cards;
}



//game events
function set_game_events(){
    const cards = document.getElementById('deck').childNodes;
    for(let card of cards){
        card.addEventListener('click', mark_card);
    }
}



function mark_card(event){
    if(marked_cards.length !=2){
        //access to the hero card
        let card = event.target.children[0];
        // add card to marked cards 
        marked_cards.push(card);
        console.log('length of marked', marked_cards.length)
        // reveal card
        card.style.display = 'flex';
        //remove mark_card listener event
        card.parentElement.removeEventListener('click', mark_card);
        
        check_marked_cards();
    }
}

// check if two cards are marked
function check_marked_cards(){
    console.log(marked_cards);
    if(marked_cards.length == 2){
        check_twins();
    }
}

//check if twins are the same 
function check_twins(){
    let card_1 = marked_cards[0].classList;
    let card_2 = marked_cards[1].classList;
    if(card_1[0] == card_2[0]){
        console.log('twins');
    }else{
        id_hide = setInterval(hide_reveal, 2000);
        
    }

}


// function to hide reveals cards
function hide_reveal(){
    for(let card of marked_cards){
        card.style.display = 'none';
        card.parentElement.addEventListener('click', mark_card);
    }
    //clear time interval
    clearInterval(id_hide);
    marked_cards = [];
    console.log('cleaning');

}


//adjust board size
board_size(difficulty);

//deal cards
draw_the_board();

//game events
set_game_events();


