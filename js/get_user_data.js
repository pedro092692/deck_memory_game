/* js app
@uthor Pedro Bastidas <pedro092692@hotmail.com>
@link github
https://github.com/pedro092692/deck_memory_game
*/

var play_button
var nickname 
var difficulty 
var email 
var form

/*
 * load content 
 * this function load htmlElements:
 * nickname, difficulty and play button
 */
function load_content(){
    play_button = document.getElementById('play_game');
    nickname = document.getElementById('nick');
    email = document.getElementById('email');
    difficulty = document.getElementById('level');
    form = document.getElementById('form');

    // of error if user try to access to game.html without data
    if(sessionStorage.getItem('error')){
        let error = document.getElementById('nick-error');
        error.style.display = 'block';
        nickname.focus();
        sessionStorage.removeItem('error');
    }else if(sessionStorage.getItem('d-error')){
        let error = document.getElementById('difficulty-error');
        error.style.display = 'block';
        difficulty.focus();
        sessionStorage.removeItem('d-error');
    }

    // check form before submit
    form.addEventListener('submit', check_form);
}


//check user data and comprove form data 
// params {Event} event
function check_form(event){
    if(nickname.value.length == 0){
        prevent_form(event, 'nick-error', nickname);
    }else if(difficulty.value == ''){
        prevent_form(event, 'difficulty-error', difficulty);
    }else if(email.value.length == 0){
        prevent_form(event, 'email-error', email);
    }else if(nickname.value.match(/(?<!\S)[0-9]/)){
        let error = document.getElementById('nick-error');
        error.innerHTML = '';
        error.innerText = 'The nickname cannot start with a number.';
        prevent_form(event, 'nick-error', error);
    } 
        
    // set usar data in session variables
    set_user_data(nickname, email, difficulty);
    return true;
    
}

// this function prevents send form and focus on element with errors.
function prevent_form(event, error_id, form_element){
    event.preventDefault();
    let error = document.getElementById(error_id);
    error.style.display = 'block';
    form_element.focus();
    return false;
}


// set usar data in session variables 
function set_user_data(nickname, email, difficulty){
    sessionStorage.setItem('nickname', nickname.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('difficulty', parseInt(difficulty.value));
}



// Load content
load_content();

