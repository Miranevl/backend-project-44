import readlineSync from 'readline-sync';
import { getName, name } from './cli.js';
import { readAnswer } from '../bin/brain-even.js';

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomOperation() {
  const operand = ['+', '-', '*'];
  const rand = operand[Math.floor(Math.random() * operand.length)];
  return rand;
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
    const saveRandomOne = getRandomInt(10);
    const saveRandomTwo = getRandomInt(10);
    const saveOperand = getRandomOperation();
    const createResult = (`${saveRandomOne} ${saveOperand} ${saveRandomTwo}`);
    const saveResult = eval(createResult);
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
