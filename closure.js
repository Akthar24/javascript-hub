// A closure is created when a function remembers and can access variables from its outer (parent) function scope even after the outer function has finished executing.


function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        console.log(count);
    }

    return innerFunction;
}

const counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3


// What is happening here?

// outerFunction() runs

// count is created inside outerFunction

// innerFunction is returned

// Even after outerFunction finishes,

// innerFunction still remembers count

// This memory + function = closure

// Why Closure Exists?

// JavaScript functions remember the scope in which they were created, not where they are executed.

// 🔹 Real-World Analogy

// 🎒 School bag

// You leave school

// Bag still contains books

// ➡ Function leaves scope
// ➡ Variables stay remembered