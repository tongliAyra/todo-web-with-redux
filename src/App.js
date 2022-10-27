import React from 'react'
import { TaskContent } from './components/task-content/TaskContent.js'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/header'

export const App = () => {
  return (
    <section>
      <Header />
      <TaskContent />
      <Footer />
    </section>
  )
}
