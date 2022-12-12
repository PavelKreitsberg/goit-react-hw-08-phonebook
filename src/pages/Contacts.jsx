// import { Section } from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
// import { ThreeCircles } from 'react-loader-spinner';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <Section title="Phonebook"> */}
      <ContactForm />
      {/* </Section> */}
      {/* <Section title="Contacts"> */}
      <Filter />
      {/* <ThreeCircles
        display="block"
        height="30"
        width="30"
        color="#367af6"
        wrapperStyle={{}}
        wrapperClass="spinnerWrapper"
        visible={true}
        ariaLabel="three-circles-rotating"
      /> */}
      <ContactList />
      {/* </Section> */}
    </div>
  );
}
