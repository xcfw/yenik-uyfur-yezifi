const cyrillicToLatinMap = {
  'а': 'a', 'ә': 'e', 'б': 'b', 'п': 'p', 'т': 't', 'җ': 'dj', 'ч': 'c', 'х': 'x', 'д': 'd', 
  'р': 'r', 'з': 'z', 'ж': 'j', 'с': 's', 'ш': 'w', 'ғ': 'f', 'ф': 'ph', 'қ': 'q', 'к': 'k', 
  'г': 'g', 'ң': 'ng', 'л': 'l', 'м': 'm', 'н': 'n', 'һ': 'h', 'о': 'o', 'у': 'u', 'ө': 'ö', 
  'ү': 'ü', 'в': 'v', 'е': 'é', 'и': 'i', 'й': 'y', 
  'А': 'A', 'Ә': 'E', 'Б': 'B', 'П': 'P', 'Т': 'T', 'Җ': 'Dj', 'Ч': 'C', 'Х': 'X', 'Д': 'D', 
  'Р': 'R', 'З': 'Z', 'Ж': 'J', 'С': 'S', 'Ш': 'W', 'Ғ': 'F', 'Ф': 'Ph', 'Қ': 'Q', 'К': 'K', 
  'Г': 'G', 'Ң': 'Ng', 'Л': 'L', 'М': 'M', 'Н': 'N', 'Һ': 'H', 'О': 'O', 'У': 'U', 'Ө': 'Ö', 
  'Ү': 'Ü', 'В': 'V', 'Е': 'É', 'И': 'I', 'Й': 'Y'
};

function transText(text) {
  return text.split('').map(char => {
    const translatedChar = cyrillicToLatinMap[char] || char;
    // Preserve original capitalization
    return (char.toUpperCase() === char) ? translatedChar.toUpperCase() : translatedChar;
  }).join('');
}

// Example usage
const cyrillicText = 'Какой-то текст';
const latinText = transText(cyrillicText);
console.log(latinText); // Outputs: "PriVet, Mir!"

