import { Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
