// Getting the user's location
const locationButton = document.getElementById('locationButton');
const emergencyButton = document.getElementById('emergencyButton');
const statusText = document.getElementById('status');

// Display user's location on click
locationButton.addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            statusText.innerText = `Location: Latitude ${latitude}, Longitude ${longitude}`;

            // Redirect to the map page with the user's location
            window.location.href = `map.html?lat=${latitude}&lng=${longitude}`;
        }, function(error) {
            statusText.innerText = "Unable to retrieve location.";
        });
    } else {
        statusText.innerText = "Geolocation is not supported by this browser.";
    }
});

// Send emergency alert (Optional: Integrate Twilio for SMS)
emergencyButton.addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Here, you can send an emergency alert to a trusted contact
            alert(`Emergency! Location: Latitude ${latitude}, Longitude ${longitude}`);

            // Example: Make an API call to send SMS (Twilio, etc.)
            // sendEmergencyAlert(latitude, longitude);
        }, function(error) {
            alert("Unable to retrieve location for emergency.");
        });
    } else {
        alert("Geolocation is not supported.");
    }
});

// Optional: Function to send an SMS alert via Twilio (you would need a Twilio account)
function sendEmergencyAlert(latitude, longitude) {
    // Implement Twilio API here (Note: You need a Twilio account)
}
