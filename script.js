// Your Script here.
function rot13(str) {
  // Define a variable to hold the decoded string
  let decoded = "";
  
  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code of the current character
    const charCode = str.charCodeAt(i);
    
    // If the character is not a letter, append it to the decoded string as is
    if (charCode < 65 || charCode > 90) {
      decoded += str[i];
    } else {
      // Otherwise, shift the character code by 13 places
      // If the new code is greater than 90, wrap around to 65
      const newCharCode = (charCode - 65 + 13) % 26 + 65;
      decoded += String.fromCharCode(newCharCode);
    }
  }
  
  return decoded;
}
