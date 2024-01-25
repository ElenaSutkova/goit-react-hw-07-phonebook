import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "store/selectors";
import { addContact } from "store/contactSlice";
import styles from './Form.module.css';

const Form = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            contacts.find(
                (contact) => contact.name.toLowerCase() === name.toLowerCase()
            ) === undefined
        ) {
            const item = { id: nanoid(), name, number };
            dispatch(addContact(item));
            setName('');
            setNumber('');
        } else {
            alert(`${name} is already in contacts.`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <ul className={styles.list}>
                
                <li className={styles.item}>
                    <label className={styles.label}>Name</label>
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Enter name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </li>

                <li className={styles.item}>
                    <label className={styles.label}>Number</label>
                    <input
                        type="tel"
                        name="number"
                        className={styles.input}
                        placeholder="Enter phone number"
                        value={number}
                        onChange={handleChange}
                        required
                    />
                </li>

                <li>
                    <button type="submit">Add Contact</button>
                </li>
            </ul>
        </form>
    )
}

export default Form;