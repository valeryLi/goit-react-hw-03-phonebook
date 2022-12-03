import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        className={s.filter_input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
