#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../../src/index.js';
import { name } from '../../src/cli.js';

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

export const brainCalc = () => {
  console.log('What is the result of the expression?');
  let roundWin = 0;
  while (roundWin < 3) {
    const saveRandomOne = getRandomInt(1, 100);
    const saveRandomTwo = getRandomInt(1, 100);
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
