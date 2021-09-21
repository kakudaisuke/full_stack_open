import React from 'react'

const Header = (prop) => {
  const course = prop.course

  return (
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  const part = props.part
  const exercises = props.exercises

  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  )
  
}

const Content = (props) => {
  const name1 = props.parts[0].name
  const name2 = props.parts[1].name
  const name3 = props.parts[2].name
  const exercises1 = props.parts[0].exercises
  const exercises2 = props.parts[1].exercises
  const exercises3 = props.parts[2].exercises


  return (
    <>
      <Part part={name1} exercises={exercises1} />
      <Part part={name2} exercises={exercises2} />
      <Part part={name3} exercises={exercises3} />
    </>
  )
}

const Total = (props) => {
  const exercises1 = props.parts[0].exercises
  const exercises2 = props.parts[1].exercises
  const exercises3 = props.parts[2].exercises

  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App