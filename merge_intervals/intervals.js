let intervals = [[1,3],[2,6],[8,10],[15,18]];

// Output: [[1,6],[8,10],[15,18]]

function mergeIntervals(intervals){
  
  intervals.sort((a,b) => a[0] - b[0]);
  let result = [input[0]];
  for(let i=1;i<input.length;i++){
    let last = result[result.length-1];
    let current = input[i];
    console.log(last, current);
    if(current[0] <= last[1]){
      last[1] = Math.max(current[1], last[1]);
    }
    else {
      result.push(input[i]);
    }
  }
  return result;
  
}

console.log(mergeIntervals(intervals));


// Time: O(nlogn)
// Space: O(n) 