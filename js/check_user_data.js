var difficulty; 
var nickname;
var score = 0;
var turns = 0;
var board = document.getElementById('deck');

//check usar data
function check_user_data(){

    // check difficuly
    if(sessionStorage.getItem('difficulty') == null || parseInt(sessionStorage.getItem('difficulty')) < 4 || parseInt(sessionStorage.getItem('difficulty')) > 11){
        // check for localstore var 
        if(localStorage.getItem('difficulty')){
            difficulty = parseInt(localStorage.getItem('difficulty'));
            nickname = localStorage.getItem('nickname');
            score = localStorage.getItem('score');
            turns = localStorage.getItem('turns');
            board = localStorage.getItem('board');
            load_user_data();
            return true;
        }
        
        //raise an error 
        sessionStorage.setItem('d-error', 'invalid difficulty');
        return false
    }
    // check user nickname
    if(sessionStorage.getItem('nickname') == null){
        //raise an error
        sessionStorage.setItem('error', 'No user nick');
        return false;
    }
    // set user data variables
    difficulty = parseInt(sessionStorage.getItem('difficulty'));
    nickname = sessionStorage.getItem('nickname');

    //set turns base on difficulty
    switch(difficulty){
        case 4:
            turns = 5;
            break;
        case 7:
            turns = 6;
            break;
        case 11:
            turns = 8;
            break;
    }

    //load user data
    load_user_data();
    
    // save data in local storage 
    save_game(nickname, board, score, turns, difficulty);
    
    return true;
}

// load user data in global variables
function load_user_data(){
    let = nick_input = document.getElementById('nick');
    let = turns_input = document.getElementById('turns');
    nick_input.value = nickname;
    turns_input.value = turns
}

//save varibles into localstorage
function save_game(nickname, board, score, turns, difficulty){
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('board',  board.innerHTML);
    localStorage.setItem('score', score);
    localStorage.setItem('turns', turns);
    localStorage.setItem('difficulty', difficulty);
}


if(!check_user_data()){
    location = 'index.html';
}