import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <>
      {title && <h1 className={css.title}>{title}</h1>}
      {children}
    </>
  );
}
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
