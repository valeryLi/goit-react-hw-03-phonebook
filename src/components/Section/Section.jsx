import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
