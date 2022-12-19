import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { TaskInput } from '../../../src/components/task-input/TaskInput'

describe('Task input', () => {
  it('should show placeholder', () => {
    render(<TaskInput/>)
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
  })

  it('should add new task', () => {
    const mockAddTask = jest.fn()

    const setup = () => {
      const utils = render(
        <TaskInput
          handleAddTask={ mockAddTask }
          handleUpdateTask={ jest.fn }
          completedTaskList={ [] }
          todoTaskList={ [] }/>)
      const input = utils.getByPlaceholderText('What needs to be done?')
      return {
        input,
        ...utils
      }
    }
    const { input } = setup()

    fireEvent.change(input, { target: { value: 'mock-task' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(mockAddTask).toBeCalledTimes(1)
  })

  it('should update tasks', () => {
    const mockUpdateTask = jest.fn()
    render(<TaskInput
      handleAddTask={ jest.fn }
      handleUpdateTask={ mockUpdateTask }
      completedTaskList={ [] }
      todoTaskList={ [] }
    />)

    fireEvent.click(screen.getByRole('img'))

    expect(mockUpdateTask).toBeCalledTimes(1)
  })
})
