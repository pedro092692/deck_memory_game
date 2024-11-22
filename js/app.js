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
        cards += `<div class='${card.name}'> <img src='${card.img}' alt='${card.name}' height='110'> </div>`;
    }
    board.innerHTML = cards;
}



//game events

//adjust board size
board_size(difficulty);

//deal cards
draw_the_board();


