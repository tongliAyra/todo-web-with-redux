import React from 'react'
import { Header } from './components/header/Header'
import { TodoList } from './components/todo-list/TodoList'
import { CompletedList } from './components/completed-list/CompletedList'

export const App = () => {
  return (
    <section>
      <Header />
      <TodoList />
      <CompletedList />
    </section>
  )
}
