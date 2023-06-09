import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function Feedback({ optionsGood, optionsNeutral, optionsBad }) {
  return (
    <div className={css.buttonList}>
      <button className={css.button} type="button" onClick={optionsGood}>
        😀
      </button>
      <button className={css.button} type="button" onClick={optionsNeutral}>
        😐
      </button>
      <button className={css.button} type="button" onClick={optionsBad}>
        ☹️
      </button>
    </div>
  );
}
export default Feedback;

Feedback.propTypes = {
  optionsGood: PropTypes.func.isRequired,
  optionsNeutral: PropTypes.func.isRequired,
  optionsBad: PropTypes.func.isRequired,
};
