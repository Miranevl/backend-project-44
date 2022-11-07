#!/usr/bin/env node
import { getName } from '../src/cli.js';
import { readAnswer } from './brain-even.js';

console.log('Welcom to the Brain Games!');
getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
readAnswer();
