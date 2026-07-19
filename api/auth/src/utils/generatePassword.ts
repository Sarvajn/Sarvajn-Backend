import { randomInt } from "node:crypto";

const CHARACTER_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!#$%^&*?",
} as const;

type CharacterSetName = keyof typeof CHARACTER_SETS;

export interface PasswordOptions {
  length?: number;
  useUppercase?: boolean;
  useLowercase?: boolean;
  useNumbers?: boolean;
  useSymbols?: boolean;
  excludeSimilarCharacters?: boolean;
}

const SIMILAR_CHARACTERS = /[il1LoO0]/g;

function getRandomCharacter(characters: string): string {
  if (characters.length === 0) {
    throw new Error("Cannot pick a character from an empty character set.");
  }
  const index = randomInt(0, characters.length);
  const character = characters.charAt(index);
  return character;
}

function buildCharacterPool(
  enabledSets: CharacterSetName[],
  excludeSimilarCharacters: boolean,
): string {
  const pool = enabledSets.map((setName) => CHARACTER_SETS[setName]).join("");

  if (!excludeSimilarCharacters) {
    return pool;
  }

  return pool.replace(SIMILAR_CHARACTERS, "");
}

function shuffle(characters: string[]): string[] {
  const shuffled = [...characters];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = randomInt(0, i + 1);
    const temp = shuffled[i];
    const swapped = shuffled[j];

    if (temp === undefined || swapped === undefined) {
      throw new Error("Unexpected undefined value during shuffle.");
    }

    shuffled[i] = swapped;
    shuffled[j] = temp;
  }

  return shuffled;
}

export function generatePassword(options: PasswordOptions = {}): string {
  const {
    length = 12,
    useUppercase = true,
    useLowercase = true,
    useNumbers = true,
    useSymbols = true,
    excludeSimilarCharacters = false,
  } = options;

  const enabledSets: CharacterSetName[] = [];

  if (useUppercase) enabledSets.push("uppercase");
  if (useLowercase) enabledSets.push("lowercase");
  if (useNumbers) enabledSets.push("numbers");
  if (useSymbols) enabledSets.push("symbols");

  if (enabledSets.length === 0) {
    throw new Error("At least one character set must be enabled.");
  }

  if (length < enabledSets.length) {
    throw new Error(
      "Password length must be at least " +
        String(enabledSets.length) +
        " to include one character from each enabled set.",
    );
  }

  const requiredCharacters = enabledSets.map((setName) => {
    const set = excludeSimilarCharacters
      ? CHARACTER_SETS[setName].replace(SIMILAR_CHARACTERS, "")
      : CHARACTER_SETS[setName];
    return getRandomCharacter(set);
  });

  const fullPool = buildCharacterPool(enabledSets, excludeSimilarCharacters);

  const remainingCount = length - requiredCharacters.length;
  const remainingCharacters: string[] = [];

  for (let i = 0; i < remainingCount; i += 1) {
    remainingCharacters.push(getRandomCharacter(fullPool));
  }

  const passwordCharacters = shuffle([
    ...requiredCharacters,
    ...remainingCharacters,
  ]);

  return passwordCharacters.join("");
}
