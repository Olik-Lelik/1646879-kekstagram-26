// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandom (min, max) {
  if (min >= max) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше или равно числу "до".');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  const random = min + Math.random() * (max - min + 1);
  return Math.floor(random);
}

getRandom (0, 6);

// Функция для проверки максимальной длины строки.

function getMaxLenght (textExample, max) {
  if (textExample.length <= max) {
    return true;
  }
  else {
    return false;
  }
}

const TEXT = 'Задание №2. Нужно больше функций.';

getMaxLenght (TEXT, 35);

const VALUE = 25;

const MIN_AVATAR_VALUE = 1;
const MAX_AVATAR_VALUE = 6;

const MESSAGE = [
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Кузьма',
  'Барсик',
  'Рыжик',
  'Барон',
  'Бегимот',
  'Георгий Олегович',
  'Матильда',
  'Жора',
];

const DESCRIPTION = [
  'мур мяу',
  'а я все чаще замечаю',
  'на чиле на раслабоне',
  'лапы, усы и хвост - вот мой паспорт',
  'в любой непонятной ситуации ложись спать',
  'что было дальше',
  'love is',
  'ну и где еда?',
];

const getRandomArrayElement = (elements) => elements[getRandom (0, elements.length - 1)];


const createComment = (element, index) => {
  const creatValueAvatar = () => getRandom (MIN_AVATAR_VALUE, MAX_AVATAR_VALUE);

  return {
    id: index,
    avatar: `img/avatar-${creatValueAvatar()}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  };
};

const getCommentsArray = () => Array.from({length:getRandom (0, 20)}, createComment);

const creatArray = (elemet, index) => ({
  id: index,
  url: `photos/${index+1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandom (1, 200),
  comments: getCommentsArray(),
});

const getArray = Array.from({length: VALUE}, creatArray);

const lint = () => getArray;

lint();
