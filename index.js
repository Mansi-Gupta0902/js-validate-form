function nameValidation()
{
    let name=document.getElementById("name");
    var ideal=/\s/;
    if(name.value.match(ideal))
    {
        alert("Name should not contain any space");
        return false;
    }
    else
    {
        return true;
    }
}
function phoneValidation()
{
    let phone=document.getElementById("phone");
    var phoneno = /^\d{10}$/;
    if(phone.value.match(phoneno))
        {
        return true;
        }
      else
        {
        alert("Phone no. should contain 10 digits");
        return false;
        }
}
function pwdValidation()
{
    let pwd=document.getElementById("password");
    var length=/\w{7,}/;
    var upper=/[A-Z]+/;
    var special=/[&,$,#,@]+/;
    var digit=/[0-9]+/;
    if(pwd.value.length>7)
    {
    
        if(pwd.value.match(upper))
        {
            if(pwd.value.match(special))
            {
                if(pwd.value.match(digit))
                {
                    return true;
                }
                else
                {
                    alert("Password must contain atleat one digit");
                    return false;
                }
            }
            else
            {
                alert("Password must contain atleat one special character [#,$,&,@]");
                return false;
                
            }
        }
        else
        {
            alert("Password must contain atleat one uppercase character");
            return false;
        }
    }
    else
    {
        alert("Password must be 7 characters long");
        return false;
    }
    
}
function emailValidation()
{
    let email=document.getElementById("email");
    
    if(email.value.indexOf("@")>1)
    {
        if(email.value.indexOf(".")>5)
        {
            if((email.value.charAt(email.value.length-4)==".")|| (email.value.charAt(email.value.length-3)=="."))
            {
                return true;
            }
            else
            {
                alert("Email must contain 2 or 3 letters after . character ");
                return false;
            }
        }
        else
        {
            alert("Email must contain . and atleast 3 letters between . and @");
            return false;
        }
    }
    else
    {
        alert("Email must contain @ sign after few letters");
        return false;
    }
}
function confirmValidation()
{
    let password=document.getElementById("password");
    let confirmPwd=document.getElementById("confirmPassword");
    if(password.value==confirmPwd.value)
    {
        return true;
    }
    else
    {
        alert("Password and confirm passowrd field should match");
        return false;
    }
}


let button=document.getElementById("button");
button.addEventListener("click",function(e){
    
    if(nameValidation()&&phoneValidation()&&emailValidation()&&pwdValidation()&&confirmValidation())
    {
        alert("You have been registered succefully!");
    }
    else
    {
        alert("Error occured : Please follow validations mentioned");
    }
})