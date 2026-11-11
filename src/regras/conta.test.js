import { calcularGorjeta } from './conta.js';

test('gorjeta de 10% sobre R$ 187,50 é R$ 18,75', () => {
  expect(calcularGorjeta(18750, 10)).toBe(1875);
});

