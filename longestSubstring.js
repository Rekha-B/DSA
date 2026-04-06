// Given a string s, find the length of the longest substring without repeating characters.

// Input:  "abcabcbb"
// Output: 3

function longestSubstring(str){
  let maxLen = 0;
for(let i=0;i<str.length;i++){
  let set = new Set();
  for(let j=i;j<str.length;j++){
    if(set.has(str[j]))break;
    set.add(str[j]);
    maxLen = Math.max(maxLen, set.size);
  }
}
  return maxLen;
}


function longeststr(str){
  let left = 0;
  let maxLen = 0;
  let set = new Set();
  for(let right=0;right<str.length;right++){
    while(set.has(str[right])){
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLen = Math.max(maxLen, right-left+1);
  }
  return maxLen
}
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("abba"));

console.log(longeststr("abcabcbb"));
console.log(longeststr("abba"));
