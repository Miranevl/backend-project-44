import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have you name? ');
  console.log(`Hello, ${name}`);
};

export default getName;
