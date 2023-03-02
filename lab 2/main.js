
function formValidation(){
    const username=document.forms['reg-form']['name'];
    const email=document.forms['reg-form']['email'];
    const phone=document.forms['reg-form']['phone'];
    const password=document.forms['reg-form']['password'];
                                      
    var regName = /\d/g;
    var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    
    // name validation
    if(username.value == ""|| username.value.length<3){
        alert('Please enter a valid username')
        username.focus();
        return false;
    }

    if(regName.test(username.value)){
        alert('Only alphabets are  allowed')
        username.focus();
        return false;
    }

    // Email validation
    var x=email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
       alert("Please enter a valid e-mail address.");
       email.focus()  
       return false;  
    }  

    // Phone Validation
    if (phone.value == "" || phone.value.length<10 || isNaN(phone.value) ) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

    // Password Validation
    if(!regPassword.test(password.value)){
        alert("Please enter valid password.")
        password.focus();
        return false;
    }  
    
}