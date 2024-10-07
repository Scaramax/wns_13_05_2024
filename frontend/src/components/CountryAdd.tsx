import {ADD_COUNTRY, GET_ALL_COUNTRIES} from "@/graphql/client";
import {useState} from "react";
import {useMutation} from "@apollo/client";
import toast from "react-hot-toast";
import styles from  '@/styles/CountryAdd.module.css';

const CountryAdd = () => {

    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [emoji, setEmoji] = useState('');
    const [continent, setContinent] = useState('');

    const [addCountry, { loading }] = useMutation(ADD_COUNTRY, {
        onCompleted: () => {
            toast.success('Country added');
            setName('');
            setCode('');
            setEmoji('');
        },
        refetchQueries: [{ query: GET_ALL_COUNTRIES }], //Doesn't seem to work though
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addCountry({
            variables: {
                data: {
                    name,
                    code,
                    emoji,
                }
            }
        });
    };


    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.formWrapper}>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                        className={styles.inputField}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formField}>
                    <label>Emoji</label>
                    <input
                        className={styles.inputField}
                        type="text"
                        value={emoji}
                        onChange={(e) => setEmoji(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formField}>
                    <label>Code</label>
                    <input
                        className={styles.inputField}
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formField}>
                    <label>Continent (not implemented)</label>
                    <select
                        className={styles.inputField}
                        value={continent}
                        onChange={(e) => setContinent(e.target.value)}
                    >
                        <option value="">Select Continent</option>
                        <option value="1">Europe</option>
                        <option value="2">Asia</option>
                        <option value="3">Oceania</option>
                        <option value="4">Africa</option>
                        <option value="5">North America</option>
                        <option value="6">South America</option>
                    </select>
                </div>
                <div>
                    <button type="submit" disabled={loading} className={styles.submitButton}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CountryAdd;
