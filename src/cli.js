import readlineSync from 'readline-sync';

console.log('Welcom to the Brain Games!');
export const name = readlineSync.question('May i have you name? ');

export function getName() {
  console.log(`Hello, ${name}`);
}
 