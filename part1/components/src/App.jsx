import { useState } from "react"


const Button =(props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick= () => {
    setAll(allClicks.concat('L'))
    console.log("left before", left)
    const updatedLeft = left +1
    setLeft(updatedLeft)
    console.log("left after", left)
  }
  const handleRightClick= () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right+1
    setRight(updatedRight)
  }

  return (
    <div>
      {left}
      <Button text='left' handleClick={handleLeftClick} />
      <Button text='right' handleClick={handleRightClick} />
      {right}
      <History allClicks={allClicks} />

    </div>
  )
}

export default App
