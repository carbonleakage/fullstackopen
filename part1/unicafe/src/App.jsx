import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const calculateRatio = (total, numerator) => {
  let ratio = 0
  if (total != 0) {
    ratio = numerator/total
  }
  return ratio
}


const Average = ({good, neutral, bad}) => {
  return (
    <tr>
      <td>average</td>
      <td>{calculateRatio(good+neutral+bad, good-bad)}</td>
    </tr>
  )
}

const PositivePercent = ({good, neutral, bad}) => {
  return (
    <tr>
      <td>positive</td>
      <td>{calculateRatio(good+neutral+bad, good)}%</td>
    </tr>
  )

}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  if (good ===0 & neutral ===0 & bad===0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }


  return (
    <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={good+neutral+bad} />
            <Average good={good} neutral={neutral} bad={bad}/>
            <PositivePercent good={good} neutral={neutral} bad={bad}/>
          </tbody>
        </table>
      </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
