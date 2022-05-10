import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Teste o componente <Pokedex.js />', () => {
  beforeEach(() => renderWithRouter(<App />));
  const types = [...new Set(pokemons.map((pokemon) => pokemon.type))];
  const names = pokemons.map((pokemon) => pokemon.name);

  test('Testa se existe um h2 no componente.', () => {
    const h2 = screen.getByRole('heading', { level: 2, name: /encountered pokémons/i });
    expect(h2).toBeInTheDocument();
  });

  test('Testa funcionalidades do botão de próximo e dos botões de filtro.', () => {
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
    const allButton = screen.getByRole('button', { name: /all/i });
    userEvent.click(allButton);
    for (let i = 0; i < buttons.length; i += 1) {
      expect(buttons[i]).toHaveTextContent(types[i]);
    }
    for (let i = 0; i < names.length; i += 1) {
      const pokemon = screen.getByText(names[i]);
      expect(pokemon).toBeInTheDocument();
      userEvent.click(nextButton);
    }
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
});
