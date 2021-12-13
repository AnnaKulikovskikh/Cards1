import luhnProc from '../luhnProc';

test('Валидден', () => {
  const result = luhnProc('4111111111111111');
  expect(result).toBe('valid');
});

test('Не валидден', () => {
  const result = luhnProc('4111111113111112');
  expect(result).toBe('invalid');
});
