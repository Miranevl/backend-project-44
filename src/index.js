import readlineSync from 'readline-sync';
import _ from 'lodash';
import { getName, name } from './cli.js';
import { readAnswer } from '../bin/brain-even.js';

export function getRandomInt(max) {
  const Data = new Date();
  const Seconds = Data.getSeconds();
  const result = Math.trunc(Seconds % max) / 2;
  if (result === 0) {
    return 1;
  }
  return Math.trunc(Seconds % max);
}

function getRandomOperation() {
  const operand = ['+', '-', '*'];
  const rand = operand[Math.floor(Math.random() * operand.length)];
  return rand;
}
function Calculate(operator, num1, num2) {
  switch (operator) {
    case '+': return num1 + num2; break;
    case '-': return num1 - num2; break;
    case '*': return num1 * num2; break;
  }
}
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

export const brainGames = () => {
  getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  readAnswer();
};

export const calcGames = () => {
  getName();
  console.log('What is the result of the expression?');
  let roundWin = 0;
  while (roundWin < 3) {
    const saveRandomOne = getRandomInt(25);
    const saveRandomTwo = getRandomInt(10);
    const saveOperand = getRandomOperation();
    const saveResult = Calculate(saveOperand, saveRandomOne, saveRandomTwo);
    console.log(`Question: ${saveRandomOne} ${saveOperand} ${saveRandomTwo}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (Number(answerUser) === saveResult) {
      console.log('Correct!');
      roundWin += 1;
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${saveResult}.`);
      console.log(`Let's try again' ${name}!`);
      return 0;
    }
  }
  return console.log(`Congratulations,${name}!`);
};

export const gcdGames = () => {
  getName();
  console.log('Find the greatest common divisor of given numbers.');
  let roundWin = 0;
  while (roundWin < 3) {
    const saveRandomOne = getRandomInt(25);
    const saveRandomTwo = getRandomInt(10);
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
