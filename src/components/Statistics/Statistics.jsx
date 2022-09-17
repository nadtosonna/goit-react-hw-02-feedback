import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral }) => {
    return (
        <div className={css.statistics}>
            <p className={css.item}>Good: {good}</p>
            <p className={css.item}>Neutral: {neutral}</p>
            <p className={css.item}>Bad: {bad}</p>
            <p className={css.item}>Total: {good + bad + neutral}</p>
            <p className={css.item}>Positive feedback: {Math.round((good/(good + neutral + bad)) * 100)}%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number
}

export default Statistics;