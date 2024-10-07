import {ADD_COUNTRY} from "@/graphql/client";
import {useState} from "react";
import {useMutation} from "@apollo/client";
import toast from "react-hot-toast";
import styles from  '@/styles/CountryAdd.module.css';

const CountryAdd = () => {

    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [emoji, setEmoji] = useState('');

    const [addCountry, { loading }] = useMutation(ADD_COUNTRY, {
        onCompleted: () => {
            toast.success('Country added');
            setName('');
            setCode('');
            setEmoji('');
        },
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
