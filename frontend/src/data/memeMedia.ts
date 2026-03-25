const MEME_EXPRESSIONS = ['happy', 'sad', 'angry', 'surprise'] as const;

export type MemeExpression = (typeof MEME_EXPRESSIONS)[number];

export type MemeScene = {
  expression: MemeExpression;
  imageSrc: string;
  audioSrc?: string;
};

const imageModules = import.meta.glob('../assets/meme-media/**/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const audioModules = import.meta.glob('../assets/meme-audio/**/*.{mp3,wav,ogg,m4a,aac}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const extractExpression = (assetPath: string): MemeExpression | null => {
  const match = assetPath.match(/\/(happy|sad|angry|surprise)\//);
  return (match?.[1] as MemeExpression | undefined) ?? null;
};

const buildAssetMap = (): Record<MemeExpression, string[]> => ({
  happy: [],
  sad: [],
  angry: [],
  surprise: [],
});

const memeImages = buildAssetMap();
const memeAudio = buildAssetMap();

Object.entries(imageModules).forEach(([assetPath, assetUrl]) => {
  const expression = extractExpression(assetPath);
  if (expression) {
    memeImages[expression].push(assetUrl);
  }
});

Object.entries(audioModules).forEach(([assetPath, assetUrl]) => {
  const expression = extractExpression(assetPath);
  if (expression) {
    memeAudio[expression].push(assetUrl);
  }
});

const pickRandom = (items: string[]) => items[Math.floor(Math.random() * items.length)];

export const getMemeTitle = (expression: MemeExpression) => expression.charAt(0).toUpperCase() + expression.slice(1);

export const getMemePalette = (expression: MemeExpression) => {
  switch (expression) {
    case 'happy':
      return ['#ffd166', '#ef476f', '#f9844a'];
    case 'sad':
      return ['#4d7cfe', '#1d3557', '#8ecae6'];
    case 'angry':
      return ['#d90429', '#2b2d42', '#ef233c'];
    case 'surprise':
      return ['#90be6d', '#577590', '#f9c74f'];
  }
};

export const getRandomMemeScene = (exclude?: MemeExpression): MemeScene => {
  let expression = MEME_EXPRESSIONS[Math.floor(Math.random() * MEME_EXPRESSIONS.length)];

  while (exclude && expression === exclude) {
    expression = MEME_EXPRESSIONS[Math.floor(Math.random() * MEME_EXPRESSIONS.length)];
  }

  const images = memeImages[expression];
  const audio = memeAudio[expression];

  return {
    expression,
    imageSrc: pickRandom(images),
    audioSrc: audio.length > 0 ? pickRandom(audio) : undefined,
  };
};
