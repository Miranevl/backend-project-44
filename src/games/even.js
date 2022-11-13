import getRandomInt from '../randf.js';
import playGame from '../index.js';

const terms = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const num = getRandomInt(1, 100);
  const question = num;
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const playEvenGame = () => {
  playGame(terms, getRound);
};

export default playEvenGame;
