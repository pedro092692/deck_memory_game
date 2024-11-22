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


