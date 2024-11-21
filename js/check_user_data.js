var difficulty 

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
    difficulty = parseInt(sessionStorage.getItem('difficulty'));
    return true;
}


if(!check_user_data()){
    location = 'index.html';
}