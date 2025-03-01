// Increment
let taskCounter = 24;

document.querySelectorAll(".taskButton").forEach(button => {
    button.addEventListener("click", function() {

        taskCounter++;
        document.getElementById("task-counter").innerText = `${taskCounter}`;
    });
});

// Decrement
let taskCount = 6;

document.querySelectorAll(".taskButton").forEach(button => {
    button.addEventListener("click", function() {

        taskCount--;
        document.getElementById("task-count").innerText = `${taskCount}`;
    });
});
