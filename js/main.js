const NAMES = [
  'Владимир',
  'Генадий',
  'Олег',
  'Виталий',
  'Максим',
  'Наталья',
  'Светлана',
  'Ольга',
  'Ева'
];

const DESCRIPTIONS = [
  'Замечательное фото',
  'Отличный ракурс',
  'Классная идея',
  'Красивое фото',
  'Это фото заслуживае отдельного внимания',
  'Можно сразу на обложку журнала',
  'У тебя определённо талант!!!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают., Как можно было поймать такой неудачный момент?!'
];

const PHOTO_COUNT = 25;

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenirator = () => {
  let currentId = 0;

  return () => ++currentId;
};

const generatePhotoId = createIdGenirator();
const generateCommentsId = createIdGenirator();
const generateUrl = createIdGenirator();

const createComentsPhoto = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = () => ({
  id: generatePhotoId(1, 25),
  url: `photos/${generateUrl(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComentsPhoto)
});

const generatePhotos = Array.from({ length: PHOTO_COUNT }, createPhoto);

export { generatePhotos };

