import {moneyRounding} from "./moneyrounder.js"

const clear: string = "\x1b[0m"
const green: string = "\x1b[32m"
const red: string = "\x1b[31m"

const testCases = [
    {input: 0.99, expected: 1},
    {input: 0.95, expected: 1},
    {input: 1, expected: 1},
    {input: 2, expected: 2},
    {input: 2.5, expected: 2.5},
    {input: 4.49, expected: 4.5},
    {input: 4.48, expected: 4.48},
    {input: 9.99, expected: 10.0},
    {input: 9.95, expected: 10.0},
    {input: 9.90, expected: 10.0},
    {input: 19.99, expected: 20.0},
    {input: 21.59, expected: 21.6},
    {input: 81.99, expected: 82},
    {input: 99.99, expected: 100.0},
    {input: 169, expected: 170.0},
    {input: 1999, expected: 2000.0},
    {input: 1999.99, expected: 2000},
]

function runTestCases() {
    const failedTests = testCases.filter(testCase => moneyRounding(testCase.input) !== testCase.expected);

    if (failedTests.length > 0) {
        console.error("Test failures: " + failedTests.length)
        failedTests.forEach(testCase => {
            console.log(red + "Failed case:" + clear, testCase, moneyRounding(testCase.input))
        })
    } else {
        console.log(`${green}All ${testCases.length} test cases were successful.`)
    }
}

runTestCases()