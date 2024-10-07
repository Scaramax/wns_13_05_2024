import {Country} from '@/types';
import styles from '@/styles/CountryCard.module.css';

interface CountryCardProps {
    country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
    return (
        <div className={styles.wrapper}>
            <div>
                {country.name}
            </div>
            <div className={styles.countryEmoji}>
                {country.emoji}
            </div>
        </div>
    );
}

export default CountryCard;
