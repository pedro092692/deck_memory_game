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


    

}

// this function prevents send form and focus on element with errors.
function prevent_form(event, error_id, form_element){
    event.preventDefault();
    let error = document.getElementById(error_id);
    error.style.display = 'block';
    form_element.focus();
    return false;
}

// Load content
load_content();


