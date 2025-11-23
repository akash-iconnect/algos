JavaScript Type Coercion Summary

## Coercion in JavaScript is the automatic or manual conversion of one data type to another (like string → number, number → boolean) during operations or comparisons.

JavaScript performs three types of coercions:

### ➤ ToNumber

"3" → 3

"-3" → -3

true → 1

false → 0

null → 0

undefined → NaN (Note: NaN is itself a number 😅)

### ➤ ToString

5 → "5"

-5 → "-5"

true / false / null → "true" / "false" / "null"

undefined, NaN → "undefined", "NaN"

### ➤ ToBoolean

Falsy values (convert to false):

0

"" (empty string)

null

undefined

NaN

Everything else → true


Here are clean, short Markdown notes on the difference between == and === and when to use which.

## ⚖️ JS == vs === — Short Notes
### 🔹 == (Loose Equality)

Compares values only

Performs type coercion before comparing

Can produce unexpected results

Examples

"5" == 5        // true  (string → number)
false == 0      // true
null == undefined // true
"" == 0         // true

### 🔹 === (Strict Equality)

Compares value + type

No type coercion

Safer and more predictable

Examples

"5" === 5       // false (string vs number)
false === 0     // false
null === undefined // false
0 === 0         // true


📝 JS Coercion: + vs Other Operators
## ➕ 1. + Operator → Prefers ToString

When one operand is a string, + performs string concatenation.

JS first tries to convert the other operand using ToString.

Examples

"5" + 2      // "52"   (2 → "2")
"Hello " + true   // "Hello true"
"" + 5       // "5"


This happens because + has two meanings:

string concatenation

numeric addition

If either operand is a string, JS chooses string concatenation.

## ➗ 2. Other Arithmetic Operators → Use ToNumber

Operators like -, *, /, %, ** always expect numbers, so they trigger ToNumber coercion.

Examples

"5" - 1      // 4      ("5" → 5)
"10" * "2"   // 20     (both → numbers)
"8" / "2"    // 4
true - 1     // 0      (true → 1)
null + 5     // 5      (null → 0)


Even if a string is involved (except for +), JS will convert it to a number.




### Example questions

var y = 1;
if (function f() {}) {
   y += typeof f;
}
console.log(y); // ?
✅ Output
javascript
Copy code
1undefined
✍️ Short explanation (step-by-step)
function f() {} in an expression position (if ( ... )) is a function expression (a function object). Any function object is truthy, so the if condition is true and the body runs.

Inside the if body we evaluate typeof f. The name f of a named function expression is only defined inside the function itself, not in the surrounding scope. Outside the function, f is not defined.

typeof f on an undeclared identifier returns the string "undefined" (it does not throw a ReferenceError).

The statement y += typeof f does:

typeof f → "undefined" (a string)

y += "undefined" is equivalent to y = y + "undefined".

1 + "undefined" → JavaScript converts number to string and concatenates → "1undefined".

console.log(y) therefore logs the string:

javascript
Copy code
1undefined





## console.log(undefined == false)

## 🔍 undefined == false — Result & Explanation
✅ Output
false

## 📝 Why? (Short Explanation)

== (loose equality) in JavaScript performs type coercion, but it follows specific rules.

### 🚫 Rule: undefined is only loosely equal to null
undefined == null   // true


But undefined is NOT equal to any other value, including:

numbers

booleans

strings

objects

### 🔸 When comparing undefined == false:

JavaScript does NOT convert undefined to a boolean or number.

The coercion rules say:

If one side is undefined and the other is boolean, the result is always false.

So:

undefined == false  // false



📌 JavaScript Hoisting Example Explained
Code
var name = 'fvdf';

(function () {
  console.log(name);
  var name = "sdcds";
  console.log(name);
}());

🧠 Explanation (Step-by-Step)
### 1. Global variable
var name = 'fvdf';


A global variable name is created with the value "fvdf".

## 2. IIFE (Immediately Invoked Function Expression)

Inside the function:

(function () {
  console.log(name);   // ?
  var name = "sdcds";
  console.log(name);   // ?
}());

## 3. Hoisting happens inside the function

The var name inside the function is hoisted:

JavaScript rewrites the function like this:

(function () {
  var name;              // hoisted with value undefined
  console.log(name);     // prints undefined
  name = "sdcds";        // assignment happens here
  console.log(name);     // prints "sdcds"
}());

## 🧩 Why does the first console.log(name) print undefined?

Because:

var name inside the function shadows (overrides) the global variable name.

After hoisting, the local name exists but is undefined until assignment.

So the sequence is:

Hoisted variable exists → value = undefined

First console.log(name) → prints undefined

Assignment name = "sdcds"

Second console.log(name) → prints "sdcds"

🎉 Final Output
undefined
sdcds



📌 JS Reference Assignment Example Explained
Code
let a = [1, 2, 3];
let b = a;
a = [4, 5, 6];
console.log(b);

🧠 Explanation (Step-by-Step)
## 1. let a = [1, 2, 3];

a stores a reference to the array [1, 2, 3] in memory.

## 2. let b = a;

b is assigned the same reference that a currently holds.

So both a and b point to the same array object.

Memory diagram:

a ---> [1, 2, 3]
b ---^

## 3. a = [4, 5, 6];

This does NOT change the old array.

Instead, a is now assigned a new array.

b still points to the old one.

Updated memory:

a ---> [4, 5, 6]

b ---> [1, 2, 3]   (unchanged)

## 4. console.log(b);

b still references the original array, so output is:

[1, 2, 3]




### eg - 
 var name = "Lokesh Prajapati";
(function() {
  console.log(name);
  var name = "Lokesh Prajapati";
})();

op - undefined due to hoisting of name inside function as undefined

https://github.com/surbhidighe/Javascript-Output-Based-Questions