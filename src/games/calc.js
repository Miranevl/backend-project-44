import getRandomInt from '../randf.js';
import playGame from '../index.js';

function getRandomOperation() {
  const operand = ['+', '-', '*'];
  const rand = operand[Math.floor(Math.random() * operand.length)];
  return rand;
}
function calculate(operator, num1, num2) {
  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = num1 + num2;
      break;
    case '-':
      rightAnswer = num1 - num2;
      break;
    case '*':
      rightAnswer = num1 * num2;
      break;
    default:
      console.log('Error');
  }
  return rightAnswer;
}

const terms = 'What is the result of the expression?';

const getRound = () => {
  const saveRandomOne = getRandomInt(1, 10);
  const saveRandomTwo = getRandomInt(1, 10);
  const saveOperand = getRandomOperation();
  const question = `${saveRandomOne} ${saveOperand} ${saveRandomTwo}`;
  const expectedAnswer = String(calculate(saveOperand, saveRandomOne, saveRandomTwo));
  return [question, expectedAnswer];
};

const playCalcGame = () => {
  playGame(terms, getRound);
};

export default playCalcGame;
