// Initialize SpeechRecognition and SpeechSynthesis
const recognition = new webkitSpeechRecognition(); // for Chrome
const synthesis = window.speechSynthesis;

recognition.continuous = true;
recognition.lang = 'en-US'; // Specify the language

let username = ''; // Variable to store the username
let userInput = ''; // Variable to store user's speech input

// Function to start speaking instructions
function speakInstructions(instruction) {
    const utterance = new SpeechSynthesisUtterance(instruction);
    synthesis.speak(utterance);
}

// Function to start listening for speech input
function startListening() {
    recognition.onresult = function(event) {
        const speechResult = event.results[event.results.length - 1][0].transcript.trim();
        userInput += speechResult;
        document.getElementById('userInput').textContent = userInput;
    };

    recognition.start();
}

// Function to stop listening for speech input
function stopListening() {
    recognition.stop();
}

// Event listener for submit button
document.getElementById('submitButton').addEventListener('click', function() {
    stopListening();
    if (username === '') {
        username = userInput.trim();
        document.getElementById('welcomeMessage').textContent = `Hello ${username}. Please provide a password.`;
        userInput = ''; // Reset userInput for password input
        startListening();
    } else {
        const password = userInput.trim();
        document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
        userInput = ''; // Reset userInput for next interactions
        // Proceed with your logic or actions after username and password are captured
    }
});

// Start the process when the page loads
window.addEventListener('load', function() {
    speakInstructions('Welcome! Please say your username.');
    startListening();
});
