import React from 'react'

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Part = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      )}
    </>
  )
}

const Total = ({ parts }) => {
  // (1)My initial answer
  // let total = 0;
  // parts.map(part => total += part.exercises);

  // (2)with reduce() method
  const reducer = (p, c) => p + c;

  const exercisesArr = [];
  parts.map(part => {
    exercisesArr.push(part.exercises);
  })
  const total = exercisesArr.reduce(reducer);

  return <b>total of {total} exercises</b>
}

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Part parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <>
      <Course course={course} />
    </>
  )
}

export default App;
