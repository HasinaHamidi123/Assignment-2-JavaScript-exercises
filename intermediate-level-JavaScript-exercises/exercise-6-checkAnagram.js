function checkAnagram() {
    const str1 = document.getElementById("string1Input").value.trim().toLowerCase();
    const str2 = document.getElementById("string2Input").value.trim().toLowerCase();

    const result = areAnagrams(str1, str2);
    document.getElementById("result").textContent = result ? "The strings are anagrams." : "The strings are not anagrams.";
}

function areAnagrams(string1, string2) {
    // Remove spaces and sort the strings
    const normalizedStr1 = string1.replace(/\s+/g, '').split('').sort().join('');
    const normalizedStr2 = string2.replace(/\s+/g, '').split('').sort().join('');

    return normalizedStr1 === normalizedStr2;
}