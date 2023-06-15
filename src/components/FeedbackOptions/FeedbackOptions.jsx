import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.div}>
      {options.map((options, index) => (
        <button
          key={index}
          options={options}
          onClick={() => onLeaveFeedback(options)}
          className={css.buttons}
        >
          {options}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;