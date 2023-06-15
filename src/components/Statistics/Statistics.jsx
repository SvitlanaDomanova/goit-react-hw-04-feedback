import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
const Statistscs = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <>
      {total > 0 ? (
        <>
          <h2>{title}</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
};
Statistscs.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistscs;