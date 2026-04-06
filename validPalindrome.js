function isPalindrome(str){
  let left = 0;
  let right = str.length-1;
  
  while(left < right){
    while(left < right && !/[a-z0-9]/i.test(str[left]))left++;
     while(left < right && !/[a-z0-9]/i.test(str[right]))right--;
    if(str[left].toLowerCase() !== str[right].toLowerCase()){
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

console.log(isPalindrome("race a car"));
console.log(isPalindrome("A manal lanam a"));
