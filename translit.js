const cyrillicToLatinMap = {
  'а': 'a', 'ә': 'e', 'б': 'b', 'п': 'p', 'т': 't', 'җ': 'ź', 'ч': 'c', 'х': 'x', 'д': 'd', 
  'р': 'r', 'з': 'z', 'ж': 'j', 'с': 's', 'ш': 'w', 'ғ': 'f', 'ф': 'ph', 'қ': 'q', 'к': 'k', 
  'г': 'g', 'ң': 'ń', 'л': 'l', 'м': 'm', 'н': 'n', 'һ': 'h', 'о': 'o', 'у': 'u', 'ө': 'ó', 
  'ү': 'ú', 'в': 'v', 'е': 'é', 'и': 'i', 'й': 'y', 
  'А': 'A', 'Ә': 'E', 'Б': 'B', 'П': 'P', 'Т': 'T', 'Җ': 'Ź', 'Ч': 'C', 'Х': 'X', 'Д': 'D', 
  'Р': 'R', 'З': 'Z', 'Ж': 'J', 'С': 'S', 'Ш': 'W', 'Ғ': 'F', 'Ф': 'Ph', 'Қ': 'Q', 'К': 'K', 
  'Г': 'G', 'Ң': 'Ń', 'Л': 'L', 'М': 'M', 'Н': 'N', 'Һ': 'H', 'О': 'O', 'У': 'U', 'Ө': 'Ó', 
  'Ү': 'Ú', 'В': 'V', 'Е': 'É', 'И': 'I', 'Й': 'Y'
};

function transText(text) {
  return text.split('').map(char => {
    const translatedChar = cyrillicToLatinMap[char] || char;
    // Preserve original capitalization
    return (char.toUpperCase() === char) ? translatedChar.toUpperCase() : translatedChar;
  }).join('');
}

// Example usage
const cyrillicText = 'һелиму җансизға охшайду тениң, шуңа йоқму анчә өлүмдин ғемиң? чақирсам қимирлимайла ятисән, ойғанмай өлмәкчиму сән шу петиң? көзүңни йоған ечип әтрапқа бақ, өз истиқбалиң һәққидә ойлан узақ. кәтсә қолдин бу ғәнимәт, пурсити, киләчәк ишиң чатақ, ишиң чатақ.';
const latinText = transText(cyrillicText);
console.log(latinText); // Outputs: "PriVet, Mir!"

