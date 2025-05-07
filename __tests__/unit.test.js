// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//
// isPhoneNumber tests
//
test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

//
// isEmail tests
//
test('valid email: user@example.com', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('valid email: hello123@site.org', () => {
  expect(isEmail('hello123@site.org')).toBe(true);
});

test('invalid email: user@.com', () => {
  expect(isEmail('user@.com')).toBe(false);
});

test('invalid email: user.com', () => {
  expect(isEmail('user.com')).toBe(false);
});

//
// isStrongPassword tests
//
test('valid password: Abcd123', () => {
  expect(isStrongPassword('Abcd123')).toBe(true);
});

test('valid password: a_1B2C3', () => {
  expect(isStrongPassword('a_1B2C3')).toBe(true);
});

test('invalid password: 12345', () => {
  expect(isStrongPassword('12345')).toBe(false);
});

test('invalid password: ab', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

//
// isDate tests
//
test('valid date: 1/1/2020', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('valid date: 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('invalid date: 2020/01/01', () => {
  expect(isDate('2020/01/01')).toBe(false);
});

test('invalid date: 13/2020/04', () => {
  expect(isDate('13/2020/04')).toBe(false);
});

//
// isHexColor tests
//
test('valid hex: #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('valid hex: #123ABC', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});

test('invalid hex: #GGG', () => {
  expect(isHexColor('#GGG')).toBe(false);
});

test('invalid hex: 1234', () => {
  expect(isHexColor('1234')).toBe(false);
});
