import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
        <h3 className={css.notification}>{message}</h3>
    );
}

Notification.propTypes = {
    message: PropTypes.string
}

export default Notification;