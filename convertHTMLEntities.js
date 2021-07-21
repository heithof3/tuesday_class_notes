// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

function convertHTML(str) {

  const convertHTML={ "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      "\"": "&quot;",
                      "'": "&apos;"}
  return str.split("").map(letter => { return [
        letter.match(/[&<>"']/) ? convertHTML[letter] : letter]
      }).join("");
}

convertHTML("Dolce & Gabbana"); 
convertHTML("Hamburgers < Pizza < Tacos"); 
convertHTML("Sixty > twelve"); 
convertHTML('Stuff in "quotation marks"'); 
convertHTML("Schindler's List"); 
convertHTML("<>"); 
convertHTML("abc"); 