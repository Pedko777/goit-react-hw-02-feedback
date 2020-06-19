import React from 'react';
import Section from '../section/Section';
import styles from '../feedback/feedback.module.css';
import Notification from '../notification/Notfication';

const { statistic } = styles;

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <Section name="Statistic">
    {total > 0 ? (
      <div className={statistic}>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total} </span>
        <span>Positive feedback: {percentage}%</span>
      </div>
    ) : (
      <Notification message={'No feedback given'} />
    )}
  </Section>
);

export default Statistics;
