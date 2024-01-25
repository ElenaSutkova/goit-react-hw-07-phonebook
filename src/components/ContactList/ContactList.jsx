import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactListItem from "components/ContactListItem/ContactListItem";
import { deleteContact, fetchContacts } from "store/operations";
import { getContacts, getFilter, getIsLoading, getError } from "store/selectors";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <>
            {isLoading && !error && <b>Request in progress...</b>}
            {error && <b>Error: {error}</b>}
            {contacts.length > 0 && (
                <ul>
                    {(filter.length > 0
                        ? contacts.filter(item =>
                            item.name.toLowerCase().includes(filter.toLowerCase())
                        )
                        : contacts
                    ).map(item => (
                        <ContactListItem key={item.id} contact={item} onDelete={() => dispatch(deleteContact(item.id))} />
                    ))}
                </ul>
            )}
        </>
    )
}

  export default ContactList;