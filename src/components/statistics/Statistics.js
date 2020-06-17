import React from 'react';
import Section from '../section/Section';

const Statistics = () => (
  <Section name="Statistics">
    <p>Good:{this.state.good}</p>
    <p>Neutral:{this.state.neutral}</p>
    <p>Bad:{this.state.bad}</p>
    <p>Total:{}</p>
    <p>Positive feedback:{}</p>
  </Section>
);

export default Statistics;
