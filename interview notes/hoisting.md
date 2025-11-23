# 🧠 Hoisting in JavaScript (Interview Explanation)

Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope (global or function) before code execution.

But only declarations are hoisted — not initializations.

## ✔ What gets hoisted?
✅ Function Declarations

Fully hoisted. You can call them before they appear.

sayHello(); // works

function sayHello() {
  console.log("Hello!");
}

✅ var Declarations

Hoisted but initialized as undefined.

console.log(a); // undefined
var a = 10;

❌ let and const

Hoisted but placed in the Temporal Dead Zone (TDZ) → you cannot use them before declaration.

console.log(x); // ReferenceError (TDZ)
let x = 5;

# 💡 Are Arrow Functions Hoisted?
Arrow functions are not hoisted like function declarations.

It depends on how they are defined:

## ❌ Case 1: Arrow function assigned to var
doSomething(); // ❌ TypeError: doSomething is not a function

var doSomething = () => {};


Why?

var doSomething is hoisted as undefined

Calling undefined() → TypeError

# 📌 Temporal Dead Zone (TDZ)

The time between the start of the scope and the line where let or const appears.

Variable exists but is not accessible → Using it causes ReferenceError.


## 🎯 Why TDZ Exists (Its Usefulness)
### 1️⃣ Prevents accidental usage before initialization

Avoids bugs like:

console.log(count); // undefined?? (if var)
var count = 5;