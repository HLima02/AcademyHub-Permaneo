import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import HomeBanner from './index'

describe('HomeBanner Componente test', () => {
  it('should render title correctly', () => {
    render(<HomeBanner />)

    const title = screen.getByText('Conhecimento que transforma vidas!')
    expect(title).toBeInTheDocument()
  })
})