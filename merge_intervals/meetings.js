// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

// Input: intervals = [[7,10],[2,4]]
// Output: true

var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    for (let i = 1; i<intervals.length; i++) {
        const last = intervals[i - 1];
        const current = intervals[i];
        
        if (current[0] <= last[1]) {
            return false;
        }
    }
    
    return true;
};

console.log(canAttendMeetings([[0,30],[5,10],[15,20]]));
console.log(canAttendMeetings([[7,10],[2,4]]));