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

export default Course