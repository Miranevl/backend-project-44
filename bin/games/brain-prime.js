import readlineSync from 'readline-sync';
import { getRandomInt } from '../../src/index.js';
import { name } from '../../src/cli.js';

const prime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) { if (n % i === 0) return 'no'; }
  return 'yes';
};

export const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let roundWin = 0;
  while (roundWin < 3) {
    const saveRandom = getRandomInt(0, 50);
    const saveResult = prime(saveRandom);
    console.log(`Question: ${saveRandom}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (saveResult === answerUser) {
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
