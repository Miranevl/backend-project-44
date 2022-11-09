import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { getRandomInt } from '../src/index.js';

// eslint-disable-next-line import/prefer-default-export
export function readAnswer() {
  let roundWin = 0;
  while (roundWin < 3) {
    const saveRandom = getRandomInt(100);
    console.log(`Question: ${saveRandom}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (saveRandom % 2 === 0) {
      if (answerUser === 'yes') {
        console.log('Correct!');
        roundWin += 1;
      } else {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
        console.log(`Let's try again' ${name}!`);
        return 0;
      }
    }
    if (saveRandom % 2 === 1) {
      if (answerUser === 'no') {
        console.log('Correct!');
        roundWin += 1;
      } else {
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
        console.log(`Let's try again' ${name}!`);
        return 0;
      }
    }
  }
  return console.log(`Congratulations,${name}!`);
}
