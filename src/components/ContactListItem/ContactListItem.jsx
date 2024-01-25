import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDelete }) => {
    
    return (
        <li className={styles.item}>
            <p>{contact.name}: {contact.number}</p>
            <button className={styles.btn} onClick={onDelete}>Delete</button>
        </li>
    )
};

export default ContactListItem;