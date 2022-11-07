import readlineSync from 'readline-sync';

export default function getName() {
  const name = readlineSync.question('May i have you name? ');
  console.log(`Hello, ${name}`);
}
