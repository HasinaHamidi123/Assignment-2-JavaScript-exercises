function countWordOccurrences() {
    const text = document.getElementById('inputText').value;
    const words = text.trim().toLowerCase().match(/\b\w+\b/g); // Regex to match words
    const wordCount = {};

    if (words) {
        words.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1; // Count occurrences
        });
    }

    displayResults(wordCount);
}

function displayResults(wordCount) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = JSON.stringify(wordCount, null, 2); // Format results for display
}