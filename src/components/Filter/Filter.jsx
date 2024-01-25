import { useDispatch, useSelector } from "react-redux";
import styles from './Filter.module.css';
import { setFilter } from "store/filter";
import { getFilter } from "store/selectors";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

   return (
        <label className={styles.label}>
            Find contacts by name:
            <input
                className={styles.input}
                type="text"
                value={filter}
                onChange={e => {
                    dispatch(setFilter(e.target.value))
                }}
            />
        </label>
    )
}

export default Filter;