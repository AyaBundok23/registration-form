
var loginBtn = document.getElementById('login-btn') ;
var required = document.getElementById('required') ;
var incorrect = document.getElementById('incorrect');
var success = document.getElementById('success')
var Name = document.getElementById('name');

var password = document.getElementById('password')
var nameAlert =document.querySelector('.alert')
var Email = document.getElementById('email');

function addUser () {
  
    email = Email.value;
    var allUsers = new Array();
    allUsers = JSON.parse(localStorage.getItem('allusersstorsge'))? JSON.parse(localStorage.getItem('allusersstorsge')):[];

    if(email == '' || password.value == '' || Name.value == '') {
        required.classList.remove('d-none') ;
        incorrect.classList.add('d-none');
        success.classList.add('d-none');
    }  
    
   else  if(email != '' && password.value != '' && Name.value != '' && (allUsers.some((v) => {return v.email==email}))) {
        incorrect.classList.remove('d-none')
        required.classList.add('d-none') ;
        success.classList.add('d-none')

    } 
       
    else{
        if(validateUserName()) {
            allUsers.push({
                "name" :Name.value,
                "email" :email,
                "password":password.value
            })
            localStorage.setItem('allusersstorsge' , JSON.stringify(allUsers)) ;
            incorrect.classList.add('d-none')
            success.classList.remove('d-none');
            required.classList.add('d-none');
            
        }
    
    }
   
}
loginBtn.addEventListener('click' , addUser)

function validateUserName() {
    var userNameRegex = /^[A-Z][a-z ]{2,30}$/
    var uname = Name.value;
    
    if(userNameRegex.test(uname)) {
        Name.classList.add('is-valid');
        Name.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
        Name.classList.add('form-control');
        return true
    }

    else {
        Name.classList.add('form-control');
        Name.classList.add('is-invalid');
        Name.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');
        return false
    }
}
Name.addEventListener('blur' ,validateUserName)

// function validateemailName() {
//     var userEmailRegex = /^[a-zA-Z][0-9]{0,4}+@[a-z]{0,10}+\. (com)$/;
//     var uEmail = Email.value ; 
//     if(userEmailRegex.test(uEmail)) {
//         Email.classList.add('is-valid');
//         Email.classList.remove('is-invalid');
//         // nameAlert.classList.add('d-none');
//         Email.classList.add('form-control');
//         // return true
//     }

//     else {
//         Email.classList.add('form-control');
//         Email.classList.add('is-invalid');
//         Email.classList.remove('is-valid');
//         // nameAlert.classList.remove('d-none');
//         // return false
//     }


//  }
// Email.addEventListener('blur' , validateemailName)