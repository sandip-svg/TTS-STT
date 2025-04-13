const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const micButton = document.getElementById("micButton");
const speakButton = document.getElementById("speakButton");

// Search action
searchButton.addEventListener("click", () => {
    const query = searchBar.value.trim();
    if (query) {
        alert(`Searching for: "${query}"`);
        // Optionally redirect:
         window.location.href = `https://www.google.com/search?q=${query}`;
    } else {
        alert("Please enter a search term.");
    }
});

// Speech-to-Text (STT)
micButton.addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchBar.value = transcript;
    };

    recognition.onerror = (event) => {
        alert("Error recognizing speech: " + event.error);
    };
});

// Text-to-Speech (TTS)
speakButton.addEventListener("click", () => {
    const text = searchBar.value.trim();
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Nothing to speak. Type or say something first.");
    }
});