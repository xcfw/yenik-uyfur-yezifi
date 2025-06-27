// All transliteration data is derived from the user's provided markdown table.

export const ALPHABET_CONFIG = {
  UEY: { name: 'UEY - Uyghur Ereb Yezighi', id: 'UEY' as const },
  ULY: { name: 'ULY - Uyghur Latin Yezighi', id: 'ULY' as const },
  USY: { name: 'USY - Uyghur Siril Yezighi', id: 'USY' as const },
  UYY: { name: 'UYY - Pinyin Yeziqi', id: 'UYY' as const },
  IPA: { name: 'IPA - Intl. Phonetic Alphabet', id: 'IPA' as const },
  YUYv5: { name: 'YUY v5 - Yénik Uyfur Yéziqi', id: 'YUYv5' as const },
  YUYv6: { name: 'YUY v6 - Yénik Uyfur Yéziqi', id: 'YUYv6' as const },
};

export type AlphabetId = keyof typeof ALPHABET_CONFIG;

// This mapping table is derived directly from the provided markdown.
// It includes single characters, digraphs, and case variations.
const MAPPINGS: Record<AlphabetId, string>[] = [
  // Vowels and initial forms
  { UEY: 'ئا', ULY: 'A', USY: 'А', UYY: 'A', IPA: '/ɑ/', YUYv5: 'A', YUYv6: 'A' },
  { UEY: 'ا', ULY: 'a', USY: 'а', UYY: 'a', IPA: '/ɑ/', YUYv5: 'a', YUYv6: 'a' },
  { UEY: 'ئە', ULY: 'E', USY: 'Ә', UYY: 'Ə', IPA: '/ɛ/ ~ /æ/', YUYv5: 'E', YUYv6: 'E' },
  { UEY: 'ە', ULY: 'e', USY: 'ә', UYY: 'ə', IPA: '/ɛ/ ~ /æ/', YUYv5: 'e', YUYv6: 'e' },
  { UEY: 'ئو', ULY: 'O', USY: 'О', UYY: 'O', IPA: '/o/', YUYv5: 'O', YUYv6: 'O' },
  { UEY: 'و', ULY: 'o', USY: 'о', UYY: 'o', IPA: '/o/', YUYv5: 'o', YUYv6: 'o' },
  { UEY: 'ئۇ', ULY: 'U', USY: 'У', UYY: 'U', IPA: '/u/', YUYv5: 'U', YUYv6: 'U' },
  { UEY: 'ۇ', ULY: 'u', USY: 'у', UYY: 'u', IPA: '/u/', YUYv5: 'u', YUYv6: 'u' },
  { UEY: 'ئۆ', ULY: 'Ö', USY: 'Ө', UYY: 'Ɵ', IPA: '/ø/', YUYv5: 'Ö', YUYv6: 'Ó' },
  { UEY: 'ۆ', ULY: 'ö', USY: 'ө', UYY: 'ɵ', IPA: '/ø/', YUYv5: 'ö', YUYv6: 'ó' },
  { UEY: 'ئۈ', ULY: 'Ü', USY: 'Ү', UYY: 'Ü', IPA: '/y/', YUYv5: 'Ü', YUYv6: 'Ú' },
  { UEY: 'ۈ', ULY: 'ü', USY: 'ү', UYY: 'ü', IPA: '/y/', YUYv5: 'ü', YUYv6: 'ú' },
  { UEY: 'ئې', ULY: 'Ë', USY: 'Е', UYY: 'E', IPA: '/e/', YUYv5: 'É', YUYv6: 'É' },
  { UEY: 'ې', ULY: 'ë', USY: 'е', UYY: 'e', IPA: '/e/', YUYv5: 'é', YUYv6: 'é' },
  { UEY: 'ئى', ULY: 'I', USY: 'И', UYY: 'I', IPA: '/i/ ~ /ɪ/', YUYv5: 'I', YUYv6: 'I' },
  { UEY: 'ى', ULY: 'i', USY: 'и', UYY: 'i', IPA: '/i/ ~ /ɪ/', YUYv5: 'i', YUYv6: 'i' },

  // Consonants and Digraphs
  { UEY: 'ب', ULY: 'B', USY: 'Б', UYY: 'B', IPA: '/b/', YUYv5: 'B', YUYv6: 'B' },
  { UEY: 'ب', ULY: 'b', USY: 'б', UYY: 'b', IPA: '/b/', YUYv5: 'b', YUYv6: 'b' },
  { UEY: 'پ', ULY: 'P', USY: 'П', UYY: 'P', IPA: '/p/', YUYv5: 'P', YUYv6: 'P' },
  { UEY: 'پ', ULY: 'p', USY: 'п', UYY: 'p', IPA: '/p/', YUYv5: 'p', YUYv6: 'p' },
  { UEY: 'ت', ULY: 'T', USY: 'Т', UYY: 'T', IPA: '/t/', YUYv5: 'T', YUYv6: 'T' },
  { UEY: 'ت', ULY: 't', USY: 'т', UYY: 't', IPA: '/t/', YUYv5: 't', YUYv6: 't' },
  { UEY: 'ج', ULY: 'J', USY: 'Җ', UYY: 'J', IPA: '/d͡ʒ/', YUYv5: 'Dj', YUYv6: 'Ź' },
  { UEY: 'ج', ULY: 'j', USY: 'җ', UYY: 'j', IPA: '/d͡ʒ/', YUYv5: 'dj', YUYv6: 'ź' },
  { UEY: 'چ', ULY: 'Ch', USY: 'Ч', UYY: 'C', IPA: '/t͡ʃ/', YUYv5: 'C', YUYv6: 'C' },
  { UEY: 'چ', ULY: 'ch', USY: 'ч', UYY: 'c', IPA: '/t͡ʃ/', YUYv5: 'c', YUYv6: 'c' },
  { UEY: 'خ', ULY: 'X', USY: 'Х', UYY: 'H', IPA: '/χ/', YUYv5: 'X', YUYv6: 'X' },
  { UEY: 'خ', ULY: 'x', USY: 'х', UYY: 'h', IPA: '/χ/', YUYv5: 'x', YUYv6: 'x' },
  { UEY: 'د', ULY: 'D', USY: 'Д', UYY: 'D', IPA: '/d/', YUYv5: 'D', YUYv6: 'D' },
  { UEY: 'د', ULY: 'd', USY: 'д', UYY: 'd', IPA: '/d/', YUYv5: 'd', YUYv6: 'd' },
  { UEY: 'ر', ULY: 'R', USY: 'Р', UYY: 'R', IPA: '/r/', YUYv5: 'R', YUYv6: 'R' },
  { UEY: 'ر', ULY: 'r', USY: 'р', UYY: 'r', IPA: '/r/', YUYv5: 'r', YUYv6: 'r' },
  { UEY: 'ز', ULY: 'Z', USY: 'З', UYY: 'Z', IPA: '/z/', YUYv5: 'Z', YUYv6: 'Z' },
  { UEY: 'ز', ULY: 'z', USY: 'з', UYY: 'z', IPA: '/z/', YUYv5: 'z', YUYv6: 'z' },
  { UEY: 'ژ', ULY: 'Zh', USY: 'Ж', UYY: 'Ⱬ', IPA: '/ʒ/', YUYv5: 'J', YUYv6: 'J' },
  { UEY: 'ژ', ULY: 'zh', USY: 'ж', UYY: 'ⱬ', IPA: '/ʒ/', YUYv5: 'j', YUYv6: 'j' },
  { UEY: 'س', ULY: 'S', USY: 'С', UYY: 'S', IPA: '/s/', YUYv5: 'S', YUYv6: 'S' },
  { UEY: 'س', ULY: 's', USY: 'с', UYY: 's', IPA: '/s/', YUYv5: 's', YUYv6: 's' },
  { UEY: 'ش', ULY: 'Sh', USY: 'Ш', UYY: 'X', IPA: '/ʃ/', YUYv5: 'W', YUYv6: 'W' },
  { UEY: 'ش', ULY: 'sh', USY: 'ш', UYY: 'x', IPA: '/ʃ/', YUYv5: 'w', YUYv6: 'w' },
  { UEY: 'غ', ULY: 'Gh', USY: 'Ғ', UYY: 'Ƣ', IPA: '/ʁ/', YUYv5: 'F', YUYv6: 'F' },
  { UEY: 'غ', ULY: 'gh', USY: 'ғ', UYY: 'ƣ', IPA: '/ʁ/', YUYv5: 'f', YUYv6: 'f' },
  { UEY: 'ف', ULY: 'F', USY: 'Ф', UYY: 'F', IPA: '/f/', YUYv5: 'Ph', YUYv6: 'Ph' },
  { UEY: 'ف', ULY: 'f', USY: 'ф', UYY: 'f', IPA: '/f/', YUYv5: 'ph', YUYv6: 'ph' },
  { UEY: 'ق', ULY: 'Q', USY: 'Қ', UYY: 'Ⱪ', IPA: '/q/', YUYv5: 'Q', YUYv6: 'Q' },
  { UEY: 'ق', ULY: 'q', USY: 'қ', UYY: 'ⱪ', IPA: '/q/', YUYv5: 'q', YUYv6: 'q' },
  { UEY: 'ك', ULY: 'K', USY: 'К', UYY: 'K', IPA: '/k/', YUYv5: 'K', YUYv6: 'K' },
  { UEY: 'ك', ULY: 'k', USY: 'к', UYY: 'k', IPA: '/k/', YUYv5: 'k', YUYv6: 'k' },
  { UEY: 'گ', ULY: 'G', USY: 'Г', UYY: 'G', IPA: '/ɡ/', YUYv5: 'G', YUYv6: 'G' },
  { UEY: 'گ', ULY: 'g', USY: 'г', UYY: 'g', IPA: '/ɡ/', YUYv5: 'g', YUYv6: 'g' },
  { UEY: 'ڭ', ULY: 'Ng', USY: 'Ң', UYY: 'Ng', IPA: '/ŋ/', YUYv5: 'Ng', YUYv6: 'Ń' },
  { UEY: 'ڭ', ULY: 'ng', USY: 'ң', UYY: 'ng', IPA: '/ŋ/', YUYv5: 'ng', YUYv6: 'ń' },
  { UEY: 'ل', ULY: 'L', USY: 'Л', UYY: 'L', IPA: '/l/', YUYv5: 'L', YUYv6: 'L' },
  { UEY: 'ل', ULY: 'l', USY: 'л', UYY: 'l', IPA: '/l/', YUYv5: 'l', YUYv6: 'l' },
  { UEY: 'م', ULY: 'M', USY: 'М', UYY: 'M', IPA: '/m/', YUYv5: 'M', YUYv6: 'M' },
  { UEY: 'م', ULY: 'm', USY: 'м', UYY: 'm', IPA: '/m/', YUYv5: 'm', YUYv6: 'm' },
  { UEY: 'ن', ULY: 'N', USY: 'Н', UYY: 'N', IPA: '/n/', YUYv5: 'N', YUYv6: 'N' },
  { UEY: 'ن', ULY: 'n', USY: 'н', UYY: 'n', IPA: '/n/', YUYv5: 'n', YUYv6: 'n' },
  { UEY: 'ھ', ULY: 'H', USY: 'Һ', UYY: 'Ⱨ', IPA: '/h/', YUYv5: 'H', YUYv6: 'H' },
  { UEY: 'ھ', ULY: 'h', USY: 'һ', UYY: 'ⱨ', IPA: '/h/', YUYv5: 'h', YUYv6: 'h' },
  { UEY: 'ۋ', ULY: 'W', USY: 'В', UYY: 'W', IPA: '/w/ ~ /v/', YUYv5: 'V', YUYv6: 'V' },
  { UEY: 'ۋ', ULY: 'w', USY: 'в', UYY: 'w', IPA: '/w/ ~ /v/', YUYv5: 'v', YUYv6: 'v' },
  { UEY: 'ي', ULY: 'Y', USY: 'Й', UYY: 'Y', IPA: '/j/', YUYv5: 'Y', YUYv6: 'Y' },
  { UEY: 'ي', ULY: 'y', USY: 'й', UYY: 'y', IPA: '/j/', YUYv5: 'y', YUYv6: 'y' },
  // Standalone hamza for vowel separation, not in table but required for UEY.
  { UEY: 'ئ', ULY: '', USY: '', UYY: '', IPA: '', YUYv5: '', YUYv6: '' },
];

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function transliterate(text: string, from: AlphabetId, to: AlphabetId): string {
  if (from === to) return text;

  const conversionMap = new Map<string, string>();
  MAPPINGS.forEach(mapping => {
    const fromChar = mapping[from];
    const toChar = mapping[to];
    if (fromChar && toChar !== undefined) {
      conversionMap.set(fromChar, toChar);
    }
  });

  const sortedKeys = Array.from(conversionMap.keys()).sort((a, b) => b.length - a.length);

  const regex = new RegExp(sortedKeys.map(key => escapeRegExp(key)).join('|'), 'g');
  
  return text.replace(regex, match => conversionMap.get(match) || match);
}

// Heuristics for alphabet detection
const DETECTION_RULES: { alphabet: AlphabetId; regex: RegExp }[] = [
  { alphabet: 'UEY', regex: /[\u0600-\u06FF]/ },
  { alphabet: 'USY', regex: /[\u0400-\u04FF]/ },
  { alphabet: 'YUYv6', regex: /[źńóúéŹŃÓÚÉ]/ },
  { alphabet: 'UYY', regex: /[ⱫⱬƢƣⱩⱪⱧⱨƏəƟɵ]/ },
  { alphabet: 'YUYv5', regex: /dj|Dj|ph|Ph|[ÉéÖöÜü]/ },
  { alphabet: 'ULY', regex: /sh|Sh|gh|Gh|ch|Ch|zh|Zh|[Ëë]/ },
];

export function detectAlphabet(text: string): AlphabetId {
  for (const rule of DETECTION_RULES) {
    if (rule.regex.test(text)) {
      return rule.alphabet;
    }
  }
  // Default fallback if no specific characters are found
  return 'ULY';
}
