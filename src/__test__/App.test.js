import App from '../App';

it(' first paragraph is 1', () => {
  render(<App />)
  const p = document.querySelector('p');

  expect(p).toHaveTextContent('1');
});