import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../components';

describe('Teste o componente <About.js />', () => {
  beforeEach(() => renderWithRouter(<About />));

  test('Verifica h2', () => {
    const h2 = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(h2).toBeInTheDocument();
  });

  test('Verifica p', () => {
    const text1 = /this application simulates a pokédex/i;
    const text2 = /one can filter pokémons by type/i;
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('Verifica img', () => {
    const link = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', link);
  });
});
