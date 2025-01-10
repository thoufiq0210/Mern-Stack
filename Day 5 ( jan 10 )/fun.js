// Get the DOM elements
const button = document.getElementById("button");
const funContent = document.getElementById("funContent");
const fun = document.getElementById("fun");

// Button click event listener
button.onclick = () => {
    // Fetch a random joke from the API
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(function (response) {
            // Update the button text
            button.textContent = "Next";
            
            // Display the joke setup
            funContent.textContent = response.data.setup;
            
            // Clear the punchline initially
            fun.textContent = "";
            
            // Show the punchline after a delay
            setTimeout(function () {
                fun.textContent = response.data.punchline;
            }, 1000);
        })
        .catch(function (error) {
            // Log errors in the console
            console.error("Error fetching joke:", error);
        });
};