function main(){
  
  const userAuth = (function(){
      
      let users = [];
      function registerUser(userName, password){
          if(checkCredentials(userName, password)){
              return `The user is already registered` 
          }
          else{
              users.push({username:userName, password:password})
              return `The user have been added to the registeredUser array`
          }
      }
      function checkCredentials(userName, password){
          for(let i = 0; i < users.length; i++){
              if(users[i].username == userName  && users[i].password == password){
              return true;
          }
    }
          return false;
          
      }
      return{
          registerUser:registerUser
      }
        
        
})();
    

console.log(userAuth.registerUser("user1","password123"));
//Output: The user have been added to the registeredUser array
console.log(userAuth.registerUser("user1","password123"));
//Output : The user is already registered
return userAuth;
}
main();