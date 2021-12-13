import defineProc from '../defineProc';

test('Не определен', () => {
  const first = '';
  const result = defineProc(first);
  expect(result).toBe('no number');
});

test('mastercard', () => {
  const result = defineProc('5');
  expect(result).toBe('mastercard');
});

test('visa', () => {
  const result = defineProc('4');
  expect(result).toBe('mastercard');
});
test('american-express', () => {
  const result = defineProc('3');
  expect(result).toBe('american');
});
test('mir', () => {
  const result = defineProc('2');
  expect(result).toBe('mir');
});
