document.getElementById("countVowels").addEventListener("click", function() {
    const inputString = document.getElementById("inputString").value;
    const vowels = inputString.match(/[aeiou]/gi);
    const count = vowels ? vowels.length : 0;

    document.getElementById("result").textContent = `Number of vowels: ${count}`;
});