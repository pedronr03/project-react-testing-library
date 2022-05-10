import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../components';

describe('Teste o componente <About.js />', () => {
  beforeEach(() => renderWithRouter(<About />));

  test('Testa se existe um h2 no componente.', () => {
    const h2 = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(h2).toBeInTheDocument();
  });

  test('Testa se existe um p no componente.', () => {
    const text1 = /this application simulates a pokédex/i;
    const text2 = /one can filter pokémons by type/i;
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('Testa se existe uma image com um src específico no componente.', () => {
    const link = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', link);
  });
});
