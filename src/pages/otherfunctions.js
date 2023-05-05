export function alphanumericToNumber(alphanumericString) {
    alphanumericString = alphanumericString.slice(20);
    const charCodes = Array.from(alphanumericString, c => c.charCodeAt(0));

  // multiply each character code by a power of 62
  let power = charCodes.length - 1;
  const base = 62;
  let total = 0;
  for (const code of charCodes) {
    total += code * (base ** power);
    power--;
  }

  // convert total to an integer and return it
  return parseInt(total);
}

export function selectHobbies(count, seed) {
    // Load the JSON file
    const hobbies = require('./hobby.json');

    // Check if count is greater than the number of hobbies in the file
    if (count > hobbies.length) {
        return "Count exceeds the number of hobbies in the file";
    }

    // Use the seed value to create a deterministic shuffle
    let shuffledHobbies = hobbies.slice();
    for (let i = shuffledHobbies.length - 1; i > 0; i--) {
        const j = Math.floor((seed + i) % (i + 1));
        [shuffledHobbies[i], shuffledHobbies[j]] = [shuffledHobbies[j], shuffledHobbies[i]];
    }

    // Select the first 5 hobbies from the shuffled array
    return shuffledHobbies.slice(0, count).map(obj => obj.hobby);
}


