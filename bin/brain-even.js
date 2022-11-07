import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let countWin = 0;

// eslint-disable-next-line import/prefer-default-export
export function readAnswer() {
  const saveRandom = getRandomInt(100);
  let saveUserAnswer = '';
  if (countWin === 3) {
    console.log(`Congratulations,${name}!`);
    return 0;
  }
  console.log(`Question: ${saveRandom}`);
  const answerUser = readlineSync.question(`Your answer: ${saveUserAnswer}`);
  saveUserAnswer = answerUser;

  if (saveRandom % 2 === 0) {
    if (saveUserAnswer === 'yes') {
      console.log('Correct!');
      countWin += 1;
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again' ${name}!`);
      return 0;
    }
  }
  if (saveRandom % 2 === 1) {
    if (saveUserAnswer === 'no') {
      console.log('Correct!');
      countWin += 1;
    } else {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log(`Let's try again' ${name}!`);
      return 0;
    }
  }
  return readAnswer();
}
