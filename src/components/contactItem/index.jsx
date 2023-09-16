import ContactTypography from './ContactTypography.styled';
import DeleteButton from './DeleteButton.styled';

const ContactItem = ({ name, id, number, handleDelete }) => {
  return (
    <ContactTypography>
      {name}: {number}
      <DeleteButton onClick={() => handleDelete(id)} type="button">
        Delete
      </DeleteButton>
    </ContactTypography>
  );
};

export default ContactItem;
