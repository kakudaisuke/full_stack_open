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
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = props.all
  const av = (good.score + neutral.score + bad.score) / all.count || 0
  const positive = good / all.count

  if (all.count === 0) return "No feedback given";

  return (
    <>
      <p>{good.text} {good.score}</p>
      <p>{neutral.text} {neutral.score}</p>
      <p>{bad.text} {bad.score}</p>
      <p>{all.text} {all.count}</p>
      <p>average {av} %</p>
      <p>positive {bad.score} %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all_obj = {text: "all", count: good + neutral + bad}
  const good_obj = {text: "good", score: good * 1}
  const neutral_obj = {text: "neutral", score: neutral * 0}
  const bad_obj = {text: "bad", score: bad * -1}

  return (
    <>
      <Title text="give feedback" />
      <Button text="good" handleClick={()=> setGood(good + 1)} />
      <Button text="neutral" handleClick={()=> setNeutral(neutral + 1)} />
      <Button text="good" handleClick={()=> setBad(bad + 1)} />
      <Title text="statistics" />
      <Statistics good={good_obj} neutral={neutral_obj} bad={bad_obj} all={all_obj} />
    </>
  )
}

export default App