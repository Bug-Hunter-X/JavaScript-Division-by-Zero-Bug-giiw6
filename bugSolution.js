function foo(a, b) {
  if (b === 0) {
    return "Division by zero error";
  } else if (a === 0) {
    return 0;
  } else {
    return a / b;
  }
}
console.log(foo(0, 0)); // Output: Division by zero error
console.log(foo(1, 0)); // Output: Division by zero error
console.log(foo(0, 1)); // Output: 0
console.log(foo(1, 1)); // Output: 1