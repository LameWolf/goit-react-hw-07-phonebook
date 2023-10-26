import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
