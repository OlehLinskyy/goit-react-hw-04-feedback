import React, { useState } from 'react';
import Feedback from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGood = () => {
    setGood(prevState => (prevState += 1));
  };
  const onNeutral = () => {
    setNeutral(prevState => (prevState += 1));
  };
  const onBad = () => {
    setBad(prevState => (prevState += 1));
  };
  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    return Math.round((100 * good) / (good + neutral + bad));
  }

  return (
    <div>
      <Section title="Please leave Feedback">
        <Feedback
          optionsGood={onGood}
          optionsNeutral={onNeutral}
          optionsBad={onBad}
        />
        <Statistics
          goodValue={good}
          neutralValue={neutral}
          badValue={bad}
          totalValue={countTotalFeedback()}
          positiveFeedbackValue={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
