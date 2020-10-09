// Calculations for mean, median, and mode

function mean(nums) {
    let total = nums.reduce(function(acc, cur) {
        return acc += cur;
    })
    return total / nums.length
}

function median(nums) {
    nums.sort(function(a,b) {
        return a - b;
    })
    
    let middle = Math.floor(nums.length / 2);

    if (nums.length % 2 === 0) {
        return ((nums[middle -1] + nums[middle]) / 2);
    } else {
        return nums[middle];
    }
}

function mode(nums) {
    let mode = {};
    let max = 0, count = 0;

    nums.forEach(function(e) {
        if (mode[e]) { mode[e]++; }
        else { mode[e] = 1; }

        if (count<mode[e]) {
            max = e;
            count = mode[e];
        }
    });
   
    return max;
}






module.exports = {
    mean: mean,
    median: median,
    mode: mode
  };