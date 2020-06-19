import React from 'react';
import Section from '../section/Section';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';

const Feedback = ({options}) => (
  <Section name="Please leave feedback">
    <FeedbackOptions options={options} />
  </Section>
);

export default Feedback;