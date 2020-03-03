function isPalindrome(str) {
    //This method returns true if str is palindrome
    //Purifying string and uniting the case
    str = str.toUpperCase();
  
    str = str.replace(/[\W_]/g,'');
    
    //in case of even number of chars in str :
    if(str.length % 2 == 0){
      const firstWord = str.substr(0 , str.length / 2);
      let secondWord = str.substr(str.length / 2);
      secondWord = secondWord.split("").reverse().join("");//reverse 2nd substring
      return firstWord == secondWord;
    }
    //in case of odd number of chars :
    const firstWord = str.substr(0 , (str.length  / 2) +1 );
    let secondWord = str.substr((str.length /2));
    secondWord = secondWord.split("").reverse().join("");//reversing 2nd substring
    return firstWord == secondWord;
  }
  