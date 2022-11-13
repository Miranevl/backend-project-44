import getRandomInt from '../randf.js';
import playGame from '../index.js';

const getProgression = () => {
  const progression = [];
  const progressionStep = getRandomInt(1, 10);
  const firstNum = getRandomInt(0, 20);
  let num = firstNum;
  let i = 1;
  while (i <= 10) {
    progression.push(num);
    num += progressionStep;
    i += 1;
  }
  return progression;
};

const terms = 'What number is missing in the progression?';

const getRound = () => {
  const rawProgression = getProgression();
  const randomPosition = getRandomInt(0, 9);
  const hiddenNum = rawProgression[randomPosition];
  rawProgression[randomPosition] = '..';
  const processedProgression = rawProgression.join(' ');
  const question = processedProgression;
  const expectedAnswer = hiddenNum.toString();
  return [question, expectedAnswer];
};

const playProgressionGame = () => {
  playGame(terms, getRound);
};

export default playProgressionGame;
