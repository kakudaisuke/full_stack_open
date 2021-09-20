import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}


const App = () => {
  const name = "hyde"
  const age = 50

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="ken" />
      <Hello name="yuki" />
    </div>
  )
}

export default App