import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Teste o componente <PokemonDetails.js />', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
  });

  const pokemon = pokemons[0];

  test('Teste se os detalhes são mostrados corretamente.', () => {
    const link = screen.queryByRole('link', { name: /more details/i });
    const resume = pokemon.summary;
    expect(screen.getByText(`${pokemon.name} Details`)).toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /summary/i }));
    expect(screen.getByText(resume)).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção de mapas.', () => {
    const maps = screen.getAllByAltText(`${pokemon.name} location`);
    const h2 = screen.getByText(`Game Locations of ${pokemon.name}`);
    expect(h2).toBeInTheDocument();
    expect(maps).toHaveLength(pokemon.foundAt.length);
    maps.forEach((map, index) => {
      expect(map).toHaveAttribute('src', pokemon.foundAt[index].map);
    });
  });

  test('Testa funcionalidade da checkbox.', () => {
    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    expect(checkbox).not.toBeChecked();
    expect(screen
      .queryByRole('img', { name: `${pokemon.name} is marked as favorite` }))
      .not.toBeInTheDocument();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen
      .queryByRole('img', { name: `${pokemon.name} is marked as favorite` }))
      .toBeInTheDocument();
  });
});
