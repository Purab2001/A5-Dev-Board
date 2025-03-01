document.querySelectorAll(".taskButton").forEach(button => {
    button.addEventListener("click", function() {
        let taskTitle = this.parentElement.parentElement.querySelector("h2").innerText;
        let logContainer = document.getElementById("activity-logs");

        let now = new Date();
        let timeString = now.toLocaleTimeString();

        let logEntry = document.createElement("div");
        logEntry.classList.add("bg-slate-200", "p-3", "rounded-lg", "m-2");
        logEntry.innerHTML = `<p class = "text-xs text-center">You have Complete The Task <strong>${taskTitle}</strong> at <strong>${timeString}</strong></p>`;

        logContainer.appendChild(logEntry);

        this.disabled = true;
        this.style.backgroundColor = "gray-100";

        alert(`Board Updated Successfully`);
    })
})

document.getElementById("clear-history").addEventListener("click", function() {
    let logContainer = document.getElementById("activity-logs");
    logContainer.innerHTML = "<h4></h4>";
})