var marked_cards = [];
var id_hide;
const traps = ['lost_turn', 're-shuffle', 'lost-points'];
var id_reshuffle;
var twins = 0;
var score = 0;

//load highscore
function set_highscore(){
    let footer = document.getElementById('footer');
    footer.innerHTML += `HighScore: ${localStorage.getItem('highscore')}`;
}

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
    let cards = '';
    let board = document.getElementById('deck');
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
        // reveal card
        card.style.display = 'flex';
        //remove mark_card listener event
        card.parentElement.removeEventListener('click', mark_card);
        
        check_marked_cards(card);
    }
}

// check if two cards are marked
function check_marked_cards(card){
    // check for traps 
    if(traps.includes(card.classList[0])){
        // hide card first card
        if(marked_cards.length > 1){
            marked_cards[0].style.display = 'none';
            marked_cards[0].parentElement.addEventListener('click', mark_card);
        }
        //activate trap
        console.log('activate trap');
        activate_trap(card.classList[0], card);
    }
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
        //remove listener click to twins cards 
        marked_cards.forEach(card => card.removeEventListener('click', mark_card));
        // clear marked cards
        marked_cards = [];
        console.log('+ 2 points');
        twins += 1;
        //add score 
        add_score();
        // check for game over 
        game_over();
    }else{
        id_hide = setInterval(hide_reveal, 800);
        
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
    lost_turn();
    //check game over
    game_over();

}

// re shuffle board
function reshuffle(){
    let cards = Array.from(board.getElementsByClassName('card'));
    cards = shuffle(cards);
    //clean board 
    board.innerHTML = '';
    // shuffle board
    cards.forEach(card => board.appendChild(card));
    clearInterval(id_reshuffle);
}

// set trap to the game 
function activate_trap(trap, card){
    switch(trap){
        case 'lost_turn':
            console.log('-1 turn');
            lost_turn();
            break;

        case 're-shuffle':
            console.log('reshuffle');
            id_reshuffle = setInterval(reshuffle, 800);
            lost_turn();
            break;

        case 'lost-points':
            console.log('lost 1 points');
            score -= 2;
            score_input.value = score;
    }

    card.parentElement.removeEventListener('click', mark_card);
    // clear marked cards
    marked_cards = [];

}

//function lost turn 
function lost_turn(){
    turns -= 1;
    turns_input.value = turns;
}

//function add score 
function add_score(){
    score += 2;
    score_input.value = score;
}


//game over function
function game_over(){
    if(turns == 0 || twins == difficulty){
        twins = 0
        marked_cards = []
        //save highscore
        if(score > localStorage.getItem('highscore')){
            localStorage.setItem('highscore', score);
        }
        show_game_over_screen();
    }
}

//show game over screen
function show_game_over_screen(){
    document.getElementById('end_game').classList.add('end-game-color');
    document.getElementById('end_game').style.display = "flex";
    document.getElementById('deck').style.display = 'none';
    document.getElementById('new_game').addEventListener('click', (e)=>location.reload());
}

//adjust board size
board_size(difficulty);

//deal cards
draw_the_board();

//game events
set_game_events();

set_highscore();


