import { useState } from 'react'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const DisplayAnecdote = ({anecdotes, index}) => {
  return (
    <div>
      <p>{anecdotes[index]}</p>
    </div>
  )
}

const DisplayVote = ({votes, index}) => {
  return (
    <div>
      <p>has {votes[index]} votes</p>
    </div>
  )
}

const NextAnecdote = ({maxIndex, indexSetter}) => {
  return (
    <button onClick={() => indexSetter(getRandomIntInclusive(0,maxIndex))}>Next Anecdote</button>
  )
}

const Vote = ({votes, index, incrementFunction}) => {
  const voteAnecdote = () => {
    const copy = [...votes]
    copy[index] += 1
    incrementFunction(copy)
  }
  return (
    <button onClick={voteAnecdote}>vote</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(getRandomIntInclusive(0, anecdotes.length -1))
  const [votes, setVotes] = useState( new Uint16Array(anecdotes.length))
  let maxVoteIndex = Array.from(votes).map((x,i) => [x,i]).reduce((acc,current) => acc[0] > current[0] ? acc : current,[0,0])[1]
  console.log('max vote index is', maxVoteIndex)
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <DisplayAnecdote anecdotes={anecdotes} index={selected} />
      <DisplayVote votes={votes} index={selected} />
      <NextAnecdote maxIndex={anecdotes.length -1} indexSetter={setSelected}/>
      <Vote index={selected} votes={votes} incrementFunction={setVotes}/>
      <h2>Anecdote with most votes</h2>
      <DisplayAnecdote anecdotes={anecdotes} index={maxVoteIndex} />
      <DisplayVote votes={votes} index={maxVoteIndex} />

    </div>
  )
}

export default App
