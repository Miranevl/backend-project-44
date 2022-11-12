#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../../src/index.js';
import { name } from '../../src/cli.js';

const arithmeticProgression = (num, randF) => {
    let a = 1;
    let b = 1;
    const stack = [];
    for (let i = 0; i <= num; i += 1) {
      const c = a + b;
      a = b;
      b = c;
      stack.push(c);
    }
    stack.splice(randF, 1, '..');
    return stack.join(' ');
  };
  
  const arithmeticProgressionReturn = (num, randF) => {
    let a = 1;
    let b = 1;
    const stack = [];
    for (let i = 0; i <= num; i += 1) {
      const c = a + b;
      a = b;
      b = c;
      stack.push(c);
    }
    return stack[randF];
  };

export const brainProgression = () => {
    console.log('What number is missing in the progression?');
    let roundWin = 0;
    while (roundWin < 3) {
      const saveRandom = getRandomInt(5, 12);
      const saveDeleteChar = getRandomInt(0, saveRandom);
      console.log(`Question: ${arithmeticProgression(saveRandom, saveDeleteChar)}`);
      const returnDeleteChar = arithmeticProgressionReturn(saveRandom, saveDeleteChar);
      const answerUser = readlineSync.question('Your answer: ');
      if (Number(answerUser) === Number(returnDeleteChar)) {
        console.log('Correct!');
        roundWin += 1;
      } else {
        console.log(`${answerUser} is wrong answer ;(. Correct answer was ${returnDeleteChar}.`);
        console.log(`Let's try again' ${name}!`);
        return 0;
      }
    }
    return console.log(`Congratulations,${name}!`);
  };