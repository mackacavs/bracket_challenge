## BRACKET TECH TEST

A big part of the interview process is tech tests. For some of my favourites that I've done I've decided to create git repos and show my workings.

### REQUIREMENTS

Build a function in a language of your choice that, as an input, takes a string. This string will only contain paranthesis'. The function must return true if every opening paranthesis has a closing bracket

### INPUT/OUTPUT

| Input         | Output        |
| ------------- |---------------|
| 1. '()' | True |

// () => the answer is true
//  ((())) => the answer is true
//  (()()()) => the answer is true
//  ((())()) => the answer is true
//  (((( => the answer is false
//  )( => the answer is false
