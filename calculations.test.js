const calculations = require("./calculations")

test("return mean with positive numbers", function() {
    let mean = calculations.mean([5,10,15])
    expect(mean).toEqual(10)
})

test("return mean with negative numbers", function() {
    let mean = calculations.mean([-5,-10,-15])
    expect(mean).toEqual(-10)
})

test("return median with positive numbers", function() {
    let median = calculations.median([5,10,15])
    expect(median).toEqual(10)
})

test("return median with negative numbers", function() {
    let median = calculations.median([-5,-10,-15])
    expect(median).toEqual(-10)
})

test("return median with even number of values", function() {
    let median = calculations.median([5,10,15,20])
    expect(median).toEqual(12.5)
})

test("return mode with positive numbers", function() {
    let mode = calculations.mode([5,5,10,15])
    expect(mode).toEqual(5)
})

test("return mode with negative numbers", function() {
    let mode = calculations.mode([-5,-5,-10,-15])
    expect(mode).toEqual(-5)
})