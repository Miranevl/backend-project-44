import readlineSync from 'readline-sync';

const playGame = (terms, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(terms);

  let roundWin = 1;
  const roundCount = 3;
  while (roundWin <= roundCount) {
    const [question, expectedAnswer] = getRound();
    console.log(`Question: ${question}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;( Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    roundWin += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
