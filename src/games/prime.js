import getRandomInt from '../randf.js';
import playGame from '../index.js';

const prime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) { if (n % i === 0) return 'no'; }
  return 'yes';
};

const terms = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const saveRandom = getRandomInt(0, 50);
  const question = `${saveRandom}`;
  const expectedAnswer = prime(saveRandom);
  return [question, expectedAnswer];
};

const playPrimeGame = () => {
  playGame(terms, getRound);
};

export default playPrimeGame;
