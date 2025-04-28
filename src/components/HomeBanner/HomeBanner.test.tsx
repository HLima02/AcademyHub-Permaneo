import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import HomeBanner from './index'

describe('HomeBanner Componente test', () => {
  it('should render title correctly', () => {
    render(<HomeBanner />)

    const title = screen.getByText('Conhecimento que transforma vidas!')
    expect(title).toBeInTheDocument()
  })

  it('Should render subtitle correctly', () => {
    render(<HomeBanner />)

    const subTitle = screen.getByText('Cursos com certificação e conexão direta com o mercado, feitos por quem entende do mercado!')
    expect(subTitle).toBeInTheDocument()
  })
})