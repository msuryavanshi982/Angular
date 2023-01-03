const isValidName = function (value) {
    if (value.match(/^[a-zA-Z\ ]*$/)) return true;  
    return false;
}

 const isValidEmail=function(value){
    if(value.match(/^[a-z0-9_]{1,}@[a-z]{3,}[.]{1}[a-z]{3,6}$/))
    return true;
    return false;
}

const isValidPass=function(value){
    if(value.match(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/))
    return true
    return false
}
 const isValidPhone = function (value) {
    return /^[\s][6-9]\d{9}[\s]$/gi.test(value)
}
// const isValidPhone = function (phone) {
//     const phoneRegex = /^((0091)|(\+91)|0?)[6789]{1}\d{9}$/;
//     return phoneRegex.test(phone);
//   };
 const isValidString=function(value){
    if (value.match(/^[a-zA-Z0-9\.!@#$%&? ]*$/)) return true;  
    return false;
}

module.exports={isValidName ,isValidEmail, isValidPass, isValidPhone };