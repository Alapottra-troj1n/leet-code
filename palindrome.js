let isPalindrome = function(x) {

    let stringx = x.toString();
 
    let reverseString = stringx.split('').reverse().join('')
 
    if(stringx === reverseString){
     return true
    }
 
    return false
 
 
     
 };
 
 const answer = isPalindrome(3135)
 
 console.log(answer)