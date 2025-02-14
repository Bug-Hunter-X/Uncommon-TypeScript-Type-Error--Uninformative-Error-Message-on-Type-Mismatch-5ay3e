# Uncommon TypeScript Type Error: Uninformative Error Message on Type Mismatch

This repository demonstrates a TypeScript type error scenario where the error message isn't very helpful in pinpointing the issue.  The error arises from passing a string argument to a function that expects a number, resulting in a generic type error that might require some debugging effort to identify the root cause.

## The Bug

The `add` function is designed to take two numbers and return their sum. However, if you pass a string instead of a number, TypeScript will throw an error. The error message, however, may not immediately point you to the exact problem.  A more robust type-checking mechanism and a clearer error message would be very beneficial.

## The Solution

The solution involves more explicit type checking and potentially using type guards to handle different input types gracefully. This will improve the clarity and help resolve issues more effectively.  Adding input validation enhances the function's robustness, preventing unexpected behavior.