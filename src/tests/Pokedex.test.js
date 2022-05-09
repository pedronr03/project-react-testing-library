import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../components';

describe('Teste o componente <Pokedex.js />', () => {
  test('testa h2', () => {
    renderWithRouter(<NotFound />);
    const phrase = screen.getByText(/page requested not found 😭/);
    expect(phrase).toBeInTheDocument();
  });
  test('testa img', () => {
    renderWithRouter(<NotFound />);
    const link = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', link);
  });
});
