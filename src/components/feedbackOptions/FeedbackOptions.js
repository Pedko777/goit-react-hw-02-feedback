import React from 'react';
import Section from '../section/Section';

const FeedbackOptions = () =(
    <Section name="Please leave feedback">
          <button onClick={() => this.stateIncrement('good')}>Good</button>
          <button onClick={() => this.stateIncrement('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.stateIncrement('bad')}>Bad</button>
    </Section>
)


export default FeedbackOptions;