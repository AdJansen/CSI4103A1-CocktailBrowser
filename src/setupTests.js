// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


//write a test for app.js
//test for the app's main searchbar
describe('App', () => {
  it('renders searchbar', () => {
    render(<App />);
    const search = screen.getByLabelText('What will you be having?');
  });
});