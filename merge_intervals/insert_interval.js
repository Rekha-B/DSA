// Given a sorted list of non-overlapping intervals and a new interval, insert the new interval into the list, merging if necessary.

// [[1,3],[6,9]], [2,5]


// function insertInterval(intervals, newInterval){
//     if(intervals.length === 0) return [];
//     let result = [intervals[0]];
//     intervals.push(newInterval);
//     intervals.sort((a,b) => a[0] - b[0]);

//   for(let i=1;i<intervals.length;i++){
//     let last = result[result.length-1];
//     let current = intervals[i];
//     if(current[0] <= last[1]){
//       last[1] = Math.max(current[1], last[1]);
//     }
//     else {
//       result.push(intervals[i]);
//     }
//   }
//   return result;


// }

function insertInterval(intervals, newInterval){
    let i=0;
    let result = [];
    while(i < intervals.length && intervals[i][1] < newInterval[0]){
        result.push(intervals[i]);
        i++;
    }

    while(i<intervals.length && intervals[i][0] < newInterval[0]){
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        result.push(newInterval);
        i++;
    }

    while(i < intervals.length){
        result.push(intervals[i]);
        i++;
    }

    return result;
}


console.log(insertInterval([[1,3],[6,9]],[2,5]));