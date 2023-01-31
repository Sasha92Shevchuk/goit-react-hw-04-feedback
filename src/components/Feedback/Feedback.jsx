import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';

class Feedback extends Component {
  // static propTypes = {

  // }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  incrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  incrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
      <div style={{ marginLeft: '30px' }}>
        <h1>Please leave feedback</h1>
        {/* <FeedbackOptions options={} onLeaveFeedback={}/> */}
        <button type="button" onClick={this.incrementGood}>
          Good
        </button>
        <button type="button" onClick={this.incrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.incrementBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          positivePercentage={this.countPositiveFeedbackPercentage(good, total)}
        />
        {/* <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>
            Total:
            {this.countTotalFeedback(good, neutral, bad)}
          </li>
          <li>
            Positive feedback:
            {this.countPositiveFeedbackPercentage(good, total)}%
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Feedback;
