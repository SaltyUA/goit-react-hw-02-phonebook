import ContactItem from 'components/contactItem';
import ListStyled from './List.styled';

const ContactList = ({ contacts, filterValue, handleDelete }) => {
  return (
    <>
      <ListStyled>
        {contacts.map(({ id, name, number }) =>
          name.toLowerCase().includes(filterValue.toLowerCase()) ? (
            <ContactItem
              name={name}
              key={id}
              number={number}
              handleDelete={handleDelete}
              id={id}
            />
          ) : null
        )}
      </ListStyled>
    </>
  );
};

export default ContactList;
