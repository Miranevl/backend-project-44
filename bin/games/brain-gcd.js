#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../../src/index.js';
import { name } from '../../src/cli.js';
import _ from 'lodash';

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

export const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let roundWin = 0;
  while (roundWin < 3) {
    const saveRandomOne = getRandomInt(1, 50);
    const saveRandomTwo = getRandomInt(1, 50);
    console.log(`Question: ${saveRandomOne} ${saveRandomTwo}`);
    const savegcd = findGcd(saveRandomOne, saveRandomTwo);
    const answerUser = readlineSync.question('Your answer: ');
    if (savegcd === Number(answerUser)) {
      console.log('Correct!');
      roundWin += 1;
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${savegcd}.`);
      console.log(`Let's try again' ${name}!`);
      return 0;
    }
  }
  return console.log(`Congratulations,${name}!`);
};
