import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../components';

describe('Teste o componente <NotFound.js />', () => {
  test('Testa se existe um h2 no componente.', () => {
    renderWithRouter(<NotFound />);
    const phrase = screen.getByText(/page requested not found/i);
    expect(phrase).toBeInTheDocument();
  });

  test('Testa se existe uma image com um src específico.', () => {
    renderWithRouter(<NotFound />);
    const link = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const phrase = 'Pikachu crying because the page requested was not found';
    const image = screen.getByRole('img', { name: phrase });
    expect(image).toHaveAttribute('src', link);
  });
});
