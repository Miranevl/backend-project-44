import getRandomInt from '../randf.js';
import playGame from '../index.js';

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

const terms = 'What number is missing in the progression?';

const getRound = () => {
  const saveRandom = getRandomInt(5, 12);
  const saveDeleteChar = getRandomInt(0, saveRandom);
  const question = `${arithmeticProgression(saveRandom, saveDeleteChar)}`;
  const expectedAnswer = String(arithmeticProgressionReturn(saveRandom, saveDeleteChar));
  return [question, expectedAnswer];
};

const playProgressionGame = () => {
  playGame(terms, getRound);
};

export default playProgressionGame;
