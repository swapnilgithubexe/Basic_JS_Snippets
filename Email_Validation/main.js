function main(email) {
  //the value from input field can be an email string  
  let result;
    const dotIndex = email.lastIndexOf(".");
    const atIndex = email.lastIndexOf("@");
    const lastIndex = email.length - 1;
    //check if the email is right in terms of length and positions of @ and .com/org/in etc.
    if (atIndex >= 3 && lastIndex - dotIndex >= 2 && 
        dotIndex - atIndex >= 4 ) {
        result = email + "is valid";
    } else {
        result = "invalid";
    }
    
    return result;
}
