import _ from 'lodash';
import getRandomInt from '../randf.js';
import playGame from '../index.js';

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function findGcd(num1, num2) {
  let i = 1;
  const resultOne = [];
  const resultTwo = [];
  while (i <= num1 && i <= num2) {
    if (num1 % i === 0) {
      resultOne.push(i);
    }
    if (num2 % i === 0) {
      resultTwo.push(i);
    }
    i += 1;
  }
  const result = _.intersection(resultOne, resultTwo);
  const resultM = getMaxOfArray(result);
  return resultM;
}

const terms = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const saveRandomOne = getRandomInt(1, 50);
  const saveRandomTwo = getRandomInt(1, 50);
  const question = `${saveRandomOne} ${saveRandomTwo}`;
  const expectedAnswer = String(findGcd(saveRandomOne, saveRandomTwo));
  return [question, expectedAnswer];
};

const playGcdGame = () => {
  playGame(terms, getRound);
};

export default playGcdGame;
