import React from 'react';
import Section from '../section/Section';

const Statistics = ({state:{good, neutral, bad}}) => (
  <Section name="Statistics">
<div className={statistic}>
<h2>Statistics</h2>
<span>Good: {good}</span>
<span>Neutral: {neutral}</span>
<span>Bad: {bad}</span>
<span>Total: {total}</span>
<span>Positive feedback: {percentPositiveFeedback(good, total)}%</span>
 </Section>
);

 export default Statistics;
