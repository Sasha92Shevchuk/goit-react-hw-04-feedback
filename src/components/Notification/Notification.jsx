import { Message } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <Message>{message}</Message>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
