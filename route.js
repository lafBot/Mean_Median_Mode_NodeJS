const express = require('express');
const app = express();


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

app.get('/:operation', function(req, res) {
    const nums = req.query.nums;

    if (!nums) {
        return res.status(400).json(`nums are required`)
    }


    const numsArray = nums.split(',');
    const integers = numsArray.map(num => parseInt(num));
    for (let val of integers) {
        if (!val) {
            return res.status(400).json(`${nums} is not a number!`)
        }
    }

    const operation = req.params.operation;

    if (operation == "mean") {
        let solution = mean(integers)
        return res.send(`response: ${JSON.stringify({"operation": operation, "value": solution})}`)
    } else if (operation == "median"){
        let solution = median(integers)
        return res.send(`response: ${JSON.stringify({"operation": operation, "value": solution})}`)
    } else if (operation == "mode") {
        let solution = mode(integers)
        // console.log(`*********${solution[0]}***********`)
        return res.send(`response: ${JSON.stringify({"operation": operation, "value": solution})}`)
    } else {
        return res.send("Invalid operation, please choose from 'mean', 'median', or 'mode'.")
    }
    
    
})

app.listen(3000, function() {
    console.log('App on port 3000')
})
