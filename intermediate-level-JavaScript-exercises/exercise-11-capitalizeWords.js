function capitalizeWords(sentence) {
    if (!sentence) return ""; // Check if sentence is empty
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}