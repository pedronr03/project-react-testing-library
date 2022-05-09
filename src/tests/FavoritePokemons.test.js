import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../components';

describe('Teste o componente <FavoritePokemons />', () => {
  test('Teste se mensage aparece', () => {
    renderWithRouter(<FavoritePokemons />);
    const phrase = screen.getByText(/no favorite pokemon found/i);
    expect(phrase).toBeInTheDocument();
  });
});
