import readlineSync from 'readline-sync';

export const name = readlineSync.question('May i have you name? ');

export function getName () {
  console.log(`Hello, ${name}`);
}
