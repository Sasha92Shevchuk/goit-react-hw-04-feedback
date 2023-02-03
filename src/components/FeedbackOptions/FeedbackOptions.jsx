import React from 'react';
import { BoxBtn, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BoxBtn>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </BoxBtn>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
