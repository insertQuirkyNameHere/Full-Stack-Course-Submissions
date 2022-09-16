import { useState } from "react";

const Display = ({anecdote, votes}) => {
  return(
    <>
      <blockquote>{anecdote}</blockquote>
      <div>This anecdote has {votes} Votes</div>
    </>
  );
};

const App = ()=>{

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const [currAnecdote, setAnnecdote] = useState(0);
  
  const allVotes = [];
  for (const i in anecdotes){
    allVotes[i] = 0;
  }

  const [votes, setVotes] = useState(allVotes);


  const handleRandomClick = () => setAnnecdote(Math.floor(Math.random() * anecdotes.length));
  
  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[currAnecdote] += 1;
    setVotes(newVotes);
  };

  const maxVotesAnecdote = ()=> votes.indexOf(Math.max(...votes))

  return(
    <>
      <h2>Anecdotes of the Day</h2>
      <Display anecdote={anecdotes[currAnecdote]} votes={votes[currAnecdote]} />
      <button onClick={handleRandomClick}>Next Anecdote</button>
      <button onClick={handleVoteClick}>Vote</button>

      <h2>Anecdote with most votes</h2>
      <Display anecdote={anecdotes[maxVotesAnecdote()]} votes={votes[maxVotesAnecdote()]} />
    </>
  );
}

export default App;