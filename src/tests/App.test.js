import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('Teste o componente about', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  test('Teste o componente favorites', () => {
    const { history } = renderWithRouter(<App />);
    const favorites = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(favorites).toBeInTheDocument();
    userEvent.click(favorites);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Teste o componente home', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });
});
