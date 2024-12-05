function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Format the time with leading zeroes
    // hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in the clock div
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Run it once when the page loads
updateClock();

