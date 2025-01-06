// Given a list of meeting intervals, find the minimum number of conference rooms required.

// Example:
// Input: [[0,30],[5,10],[15,20]]
// Output: 2

function minMeetingRooms(intervals){
    const startTimes = intervals.map(interval => interval[0]).sort((a,b) => a-b);
    const endTimes = intervals.map(interval => interval[1]).sort((a,b) => a-b);

    let startPointer = 0;
    let endPointer = 0;
    let rooms = 0;
    let maxRooms = 0;
    while(startPointer < intervals.length){
        if(startTimes[startPointer] < endTimes[endPointer]){
             rooms++;
             startPointer++;
             maxRooms = Math.max(maxRooms,rooms);
        }
        else {
             rooms--;
             endPointer++;
        }
    }
    return maxRooms;
}

console.log(minMeetingRooms([[0,30],[5,10],[15,20]]));