import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className='feedback'>
            {
                options.map(option => {
                    return (
                        <button className={css.feedbackBtn} key={option} type='button'
                            onClick={
                                () => {
                                    onLeaveFeedback(option);
                                }
                            }>
                            {option}
                        </button>
                    );
                })
            }
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
