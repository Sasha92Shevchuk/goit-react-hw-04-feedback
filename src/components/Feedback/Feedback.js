import React, { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';
import { Wrapper } from './Feedback.styled';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    }

    if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = (good, total) => {
    return Number(((100 * good) / total).toFixed(0));
  };

  const total = good + neutral + bad;
  const stateValue = {
    good,
    neutral,
    bad,
  };
  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={['good', 'neutral', 'bad']} //  - або так або через Object.keys
          options={Object.keys(stateValue)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage(good, total)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
}
