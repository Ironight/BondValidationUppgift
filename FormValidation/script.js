
var numberArray = [];

function randomization(randomizedNumber)
{
    for(loops = 0; loops < 10; loops++){
        randomizedNumber = Math.floor(Math.random() * 101);
        if(numberArray.indexOf(randomizedNumber) == -1) {
            numberArray.push(randomizedNumber);
        }
    }
}
randomization();
console.log(numberArray);
numberArray.sort(function(a, b){return a - b});
console.log(numberArray);



function validate(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var passwordconfirm = document.getElementById("passwordConfirm").value;
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;
    
    
    if (user == "" || password == ""  || passwordconfirm  == "" || email == ""){
        alert("The entire form must be filled out");
       
    }
    

    if (password != passwordconfirm){
        alert("Password does not match");
        
    }
    

    if (password.length < 6){
        alert("Password is too short");
        
    }
    
    if (email.includes("@") != true){
        alert("Email is invalid");
       
    }

    if (password == passwordconfirm && password.length >= 6 && email.includes("@") && document.getElementById("confirm").checked == true){
        window.location.href = "redirect.html";
    }
    
    var form = document.getElementById("form");
    function handleForm(event) {event.preventDefault()} 
    form.addEventListener('submit', handleForm);
}


