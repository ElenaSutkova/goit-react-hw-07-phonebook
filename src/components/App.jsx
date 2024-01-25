import ContactList from "./ContactList/ContactList";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}

export default App;