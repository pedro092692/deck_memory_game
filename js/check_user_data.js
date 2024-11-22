var difficulty; 
var nickname;
var score = 0;
var turns = 0;
var board = document.getElementById('deck');
var avatar_thumb = document.getElementById('avatar_img');
var nick_input = document.getElementById('nick');
var turns_input = document.getElementById('turns');
var score_input = document.getElementById('score');
var avatar_img;

//check usar data
function check_user_data(){

    // check difficuly
    if(sessionStorage.getItem('difficulty') == null || parseInt(sessionStorage.getItem('difficulty')) < 4 || parseInt(sessionStorage.getItem('difficulty')) > 11){  
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
    avatar_img = sessionStorage.getItem('avatar');
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
    
    
    return true;
}

// load user data in global variables
function load_user_data(){
    nick_input.value = nickname;
    turns_input.value = turns;
    avatar_thumb.src = avatar_img;
    // set highscore
    let highscore = localStorage.getItem('highscore');
    if(highscore == null){
        localStorage.setItem('highscore', 0);
    }
}


if(!check_user_data()){
    location = 'index.html';
}