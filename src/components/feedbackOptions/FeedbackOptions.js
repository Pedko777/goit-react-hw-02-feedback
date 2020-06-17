import React from 'react';
import Button from '../button/Button';

const FeedbackOptions = ({ buttonsName }) => {
  return (
    <div className="feedbackBtn">
      {buttonsName.map(name => (
        <Button key={name} name={name}/>
      ))}
    </div>
  );
};

FeedbackOptions.defaultProps = {
  buttonsName: [],
};

export default FeedbackOptions;
