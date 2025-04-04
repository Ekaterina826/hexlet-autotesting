import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

// Проверка сменилась с отрицательной на положительную
assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');

console.log("Все тесты пройдены!");
