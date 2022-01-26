function findNumberOfMeetingRooms(intervals) {
    var n = intervals.lenght;
    var sL = [], eL = [];
    for (var i = 0; i < n; i++) {
        var interval = intervals[i];
        sL.push(interval[0]);
        eL.push(interval[1]);
    }
    sL.sort(function (a, b) { return a - b; });
    eL.sort(function (a, b) { return a - b; });
    var i = 0, j = 0, res = 0, m = 0;
    while (i < n) {
        if (sL[i] < eL[j]) {
            m++;
            i++;
        }
        else {
            m--;
            j--;
        }
        res = Math.max(res, m);
    }
    return res;
}
var result = findNumberOfMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
]);
console.log(result);
