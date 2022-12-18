import { render,screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '../../../src/components/footer/Footer'
import React from 'react'

describe('footer', () => {
  it('should show footer', () => {
    render(<Footer/>)
    expect(screen.getByText('Double click to edit todo')).toBeInTheDocument()
  })

})
