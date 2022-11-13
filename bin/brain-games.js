#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { brainEven } from './games/brain-even.js';
import { brainCalc } from './games/brain-calc.js';
import { brainGcd } from './games/brain-gcd.js';
import { brainProgression } from './games/brain-progression.js';
import { brainPrime } from './games/brain-prime.js';
import { getName } from '../src/cli.js';

getName();
const gameWrite = readlineSync.question();

switch (gameWrite) {
  case 'brain-even':
    brainEven();
    break;
  case 'brain-calc':
    brainCalc();
    break;
  case 'brain-gcd':
    brainGcd();
    break;
  case 'brain-progression':
    brainProgression();
    break;
  case 'brain-prime':
    brainPrime();
    break;
}
