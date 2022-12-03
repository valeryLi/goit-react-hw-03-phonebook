import PropTypes from 'prop-types';
import s from './Contact.module.css';

export const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <li className={s.contact_item}>
      <p>
        <span className={s.contact_name}>{name}:</span>{' '}
        <span className={s.contact_number}>{number}</span>
      </p>
      <button
        className={s.delete_btn}
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
