import React from 'react'
import './style.css'

const ERROR_MESSAGE = 'Please input something first!'
export const ErrorMessage = () => {
  return <p className="error">{ ERROR_MESSAGE }</p>
}
