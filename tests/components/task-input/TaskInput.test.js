import { render,screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { TaskInput } from '../../../src/components/task-input/TaskInput'

describe('Task input', () => {
  it('should show placeholder', () => {
    render(<TaskInput/>)
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
  })
})
