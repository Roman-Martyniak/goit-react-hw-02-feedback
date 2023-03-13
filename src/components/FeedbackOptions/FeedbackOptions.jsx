import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled.js';

/* const FeedbackButtons = ({ feedback, onLeaveFeedback }) => {
  return (
    <Button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </Button>
  );
}; */

// options.map((option => FeedbackButtons({ feedback: option, onLeaveFeedback }))

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {option.map(el => (
          <Button key={el} type="button" onClick={onLeaveFeedback}>
            {el}
          </Button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
