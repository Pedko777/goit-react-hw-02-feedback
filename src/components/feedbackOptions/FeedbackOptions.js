import React from 'react';

const FeedbackOptions = ({ options }) => {
  return (
    <>
      <button onClick={() => options("good")} type="button">
        good
      </button>
      <button onClick={() => options("neutral")} type="button">
        neutral
      </button>
      <button onClick={() => options("bad")} type="button">
        bad
      </button>
    </>
  );
};

export default FeedbackOptions;
