import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../components';

describe('Teste o componente <FavoritePokemons />', () => {
  test('Testa se uma mensagem aparece na tela quando não há pokemons favoritos.', () => {
    renderWithRouter(<FavoritePokemons />);
    const phrase = screen.getByText(/no favorite pokemon found/i);
    expect(phrase).toBeInTheDocument();
  });
});
