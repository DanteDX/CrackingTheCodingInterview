const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string Case 1', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string case 2 ', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses a string case 3', () => {
  expect(reverse('apple')).toEqual('elppa');
});

test('Reverse reverses a string case 4', () => {
  expect(reverse('Greetings')).toEqual('sgniteerG');
});

test('Reverse reverses a string case five', () => {
  expect(reverse('Orange')).toEqual('egnarO');
});
