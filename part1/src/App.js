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

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const goodText = good.text
  const goodCount = good.count
  const neutralText = neutral.text
  const neutralCount = neutral.count
  const badText = bad.text
  const badCount = bad.count
  const allCount = goodCount + neutralCount + badCount
  const av = (goodCount * 1 + neutralCount * 0 + badCount * -1) / allCount || 0
  const positiveRatio = goodCount / allCount

  if (allCount === 0) return "No feedback given";

  return (
    <>
      <p>{goodText} {goodCount}</p>
      <p>{neutralText} {neutralCount}</p>
      <p>{badText} {badCount}</p>
      <p>all { allCount }</p>
      <p>average {av} %</p>
      <p>positive { positiveRatio } %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const good_obj = { text: "good", count: good }
  const neutral_obj = { text: "neutral", count: neutral }
  const bad_obj = { text: "bad", count: bad }

  return (
    <>
      <Title text="give feedback" />
      <Button text="good" handleClick={()=> setGood(good + 1)} />
      <Button text="neutral" handleClick={()=> setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={()=> setBad(bad + 1)} />
      <Title text="statistics" />
      <Statistics good={good_obj} neutral={neutral_obj} bad={bad_obj} />
    </>
  )
}

export default App