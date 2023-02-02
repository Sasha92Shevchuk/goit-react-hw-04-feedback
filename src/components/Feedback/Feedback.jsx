import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';
import { Wrapper } from './Feedback.styled';

class Feedback extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage(good, total) {
    return ((100 * good) / total).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                good,
                total
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default Feedback;
