import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  const pokemon = pokemons[0];
  test('Testa se o card é renderizado corretamente.', () => {
    renderWithRouter(<App />);
    const weight = pokemon.averageWeight.value;
    const unit = pokemon.averageWeight.measurementUnit;
    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
    expect(screen.getAllByText(pokemon.type)).toHaveLength(2);
    expect(screen.getByText(`Average weight: ${weight} ${unit}`)).toBeInTheDocument();
    expect(screen.getByAltText(`${pokemon.name} sprite`))
      .toHaveAttribute('src', pokemon.image);
  });
  test('Testa se o card tem um link de navegação com o id do pokemon.', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);
    expect(history.location.pathname).toBe(`/pokemons/${pokemon.id}`);
    expect(screen.getByText(`${pokemon.name} Details`)).toBeInTheDocument();
  });
  test('Testa se o pokemon está favoritado.', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);
    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    const img = screen
      .getByRole('img', { name: `${pokemon.name} is marked as favorite` });
    expect(img).toHaveAttribute('src', '/star-icon.svg');
  });
});
