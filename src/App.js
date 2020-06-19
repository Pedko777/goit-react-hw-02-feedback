import React, { Component } from 'react';
import Statistics from './components/statistics/Statistics';
import Feedback from './components/feedback/Feedback';


 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateIncrement = res => this.setState(prev => ({ [res]: prev[res] + 1 }));
  sumAllState = () =>
    Object.values(this.state).reduce(
      (acc, currentValue) => acc + currentValue,
      0,
    );
  countPercentage = (state, total) => Math.round(([state] / total) * 100);
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.sumAllState();
    const percentPositiveFeedback = (state, total) =>
      this.countPercentage(state, total);
    return (
      <>
        <Feedback options={this.stateIncrement} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={isNaN(percentPositiveFeedback(good, total)) ? "0" : `${percentPositiveFeedback(good, total)}`}
        />
      </>
    );
  }
}

export default App;