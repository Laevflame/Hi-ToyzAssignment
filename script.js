
function collapse(){
    const toggleBar = document.querySelector(".bar_button")
    const toggleBarIcon = document.querySelector(".bar_button i")
    const sidebarMenu = document.querySelector(".side-bar")

        sidebarMenu.classList.toggle('open')
        const isOpen = sidebarMenu.classList.contains('open')
        toggleBarIcon.classList = isOpen
            ?'fa-sharp fa-solid fa-xmark'
            :'fa-sharp fa-solid fa-bars'
}






function validation(){
    
    // var form = document.getElementById('form');
    var fullName = document.getElementById("fullName").value;
    var birthDateUnparsed = document.getElementById("birthDate").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errormsg = document.getElementById("errormsg");
    
    
    if(fullName.trim()===""){
        errormsg.innerText = "Please Fill out your name";
        return false;
    } 
    var currentDate = new Date();
    var birthDate= new Date(birthDateUnparsed);
    var minAgeDate = new Date();
    minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
    if(currentDate < birthDate || birthDate > minAgeDate){
        errormsg.innerText = "You must be over 18 years old";
        return false;
    } 
    
    if(!email.endsWith(".com") || !email.includes("@")){
        errormsg.innerText = "Provide a valid email address";
        return false;
    } 
    
    if(password.length < 8|| checkAlphaNum(password.value)){
        errormsg.innerText = "Password must be at least 8 character long and alphanumeric.";
        return false;
    } 
    // I DONT WANT TO KNOW WHY, I DONT KNOW WHY, IM JUST UNABLE TO CAN AND COMPREHEND WHY THIS CHECK BOX ONLY WORKS WHEN THE OTHER IF IS COMMENTED WHYYYYYYYYYYYYYYYYYYYYYYY
    // WHY WONT YOU WORK YOU XXXXXXXX XXXXXX
    var checkbox = document.getElementById("checkbox");
    if (!checkbox.checked){
        alert("You must agree with the terms and conditions");
        return false;
    }   
    alert("Successful Register")
    window.location.href = "main.html";
    
}


function checkAlphaNum(password){
    var isNum = false;
    var isAlpha = false;

    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        } else {
            isNum = true
        }
        if(isAlpha && isNum){
            return true
        }
    }
    return false;
}