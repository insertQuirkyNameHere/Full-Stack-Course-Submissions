import { useState } from "react";

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>;
const Statistics = ({good, neutral, bad})=>{

  if (good === 0 && neutral === 0 && bad===0){
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  else{
    let total = good+bad+neutral;
    let average = (good - bad)/total;
    let positivePercentage = good / total * 100;
    positivePercentage = positivePercentage + '%';
    return (
      <>
        <h2>Statistics</h2>

        <table>
          <tbody>
          <StatisticLine text='Good' value={good}></StatisticLine>
          <StatisticLine text='Neutral' value={neutral}></StatisticLine>
          <StatisticLine text='Bad' value={bad}></StatisticLine>
          <StatisticLine text='Total' value={total}></StatisticLine>
          <StatisticLine text='Average' value={average}></StatisticLine>
          <StatisticLine text='Positive' value={positivePercentage}></StatisticLine>
          </tbody>         
        </table>
      </>
    );
  }
};

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good+1);
  const handleBadClick = ()=> setBad(bad+1);
  const handleNeutralClick = ()=> setNeutral(neutral+1);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='Good'></Button>
      <Button handleClick={handleNeutralClick} text='Neutral'></Button>
      <Button handleClick={handleBadClick} text='Bad'></Button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  );
};

export default App;