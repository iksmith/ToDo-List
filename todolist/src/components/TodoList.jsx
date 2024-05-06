import React from 'react'

export default function TodoList() {
    let todos = [
        `Go to gym`,
        `Practice Code`,
        `Feed Doggies`
    ]
    
  return (
    <ul>
        {todos.map((todo, index) => {
            return (
                <li key={index}>{todo}</li>
            )
        })}
    </ul>
  )
}
