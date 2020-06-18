import React, { Component } from 'react';
import styles from './feedback.module.css';

const { statistic } = styles;
export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateIncrement = res => this.setState(prev => ({ [res]: prev[res] + 1 }));
  sumState = () =>
    Object.values(this.state).reduce((acc, currentValue) => acc + currentValue);
  countPercentage = (state, total) => Math.round(([state] / total) * 100);
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.sumState();
    const percentPositiveFeedback = (state, total) =>
      this.countPercentage(state, total);
    return (
      <div className="container">
        <div className="FeedbackOptions">
          <h2>Please leave feedback</h2>
          <button onClick={() => this.stateIncrement('good')}>Good</button>
          <button onClick={() => this.stateIncrement('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.stateIncrement('bad')}>Bad</button>
        </div>
        {total > 0 && (
          <div className={statistic}>
          <h2>Statistics</h2>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>Positive feedback: {percentPositiveFeedback(good, total)}%</span>
        </div>
        )}
        </div>
    );
  }
}
