document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const currentDateElement = document.getElementById('current-date');

    if (currentDateElement) {
        console.log("Current date element found");

        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString(undefined, options);

        currentDateElement.textContent = `${currentDate}`;
        console.log("Current date set: ", currentDate);
    } else {
        console.log("Current date element not found");
    }
});
