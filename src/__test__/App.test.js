import App from '../App';
import {render} from '@testing-library/react';

it(' paragraph contains 1', () => {
  render(<App />)
  const p = document.querySelector('p');

  expect(p).toHaveTextContent('1');
});

it(' paragraph contains 2', () => {
  render(<App />)
  const p = document.querySelector('p');

  expect(p).toHaveTextContent('2');
});

it(' paragraph contains 3', () => {
  render(<App />)
  const p = document.querySelector('p');

  expect(p).toHaveTextContent('3');
});

it(' paragraph contains 4', () => {
  render(<App />)
  const p = document.querySelector('p');

  expect(p).toHaveTextContent('4');
});

it(' paragraph contains 5', () => {
  render(<App />)
  const p = document.querySelector('p');

  expect(p).toHaveTextContent('5');
});
