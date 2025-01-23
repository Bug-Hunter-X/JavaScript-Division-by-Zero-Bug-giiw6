# JavaScript Division by Zero Bug

This repository demonstrates a common JavaScript bug related to division by zero and provides a solution.

## The Bug

The `foo` function in `bug.js` calculates the result of `a / b`. However, it doesn't handle the cases where either `a` or `b` is 0, leading to `NaN` or `Infinity`.

## The Solution

The `bugSolution.js` file provides a corrected version that checks for division by zero before performing the calculation, returning an appropriate error message instead.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` and observe the output (NaN, Infinity, 0, 1).
3. Run `bugSolution.js` and observe the improved error handling.