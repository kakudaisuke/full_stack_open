import React, { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistic = (props) => {
  return (
    <p>{props.text} {props.score}{props.unit}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = good + neutral + bad
  const goodP = good * 1
  const neutralP = neutral * 0
  const badP = bad * -1

  return (
    <>
      <Title text="give feedback" />
      <Button text="good" handleClick={()=> setGood(good + 1)} />
      <Button text="neutral" handleClick={()=> setNeutral(neutral + 1)} />
      <Button text="good" handleClick={()=> setBad(bad + 1)} />
      <Title text="statistics" />
      <Statistic text="good" score={good} />
      <Statistic text="neutral" score={neutral} />
      <Statistic text="bad" score={bad} />
      <Statistic text="all" score={sum} />
      <Statistic text="average" score={(goodP + neutralP + badP) / sum} />
      <Statistic text="positive" score={good / sum} unit=" %" />
    </>
  )
}

export default App