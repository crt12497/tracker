document.getElementById("visitorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const visitorData = {};
    formData.forEach((value, key) => {
        visitorData[key] = value;
    });

    fetch("/saveData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(visitorData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Display a success message or redirect to a thank you page
    })
    .catch(error => {
        console.error("Error:", error);
        // Display an error message
    });
});
