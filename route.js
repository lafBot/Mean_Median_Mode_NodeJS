const express = require('express');
const app = express();
const calculations = require("./calculations")



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
        let solution = calculations.mean(integers)
        return res.send(`response: ${JSON.stringify({"operation": operation, "value": solution})}`)
    } else if (operation == "median"){
        let solution = calculations.median(integers)
        return res.send(`response: ${JSON.stringify({"operation": operation, "value": solution})}`)
    } else if (operation == "mode") {
        let solution = calculations.mode(integers)
        // console.log(`*********${solution[0]}***********`)
        return res.send(`response: ${JSON.stringify({"operation": operation, "value": solution})}`)
    } else {
        return res.send("Invalid operation, please choose from 'mean', 'median', or 'mode'.")
    }
})


app.listen(3000, function() {
    console.log('App on port 3000')
})