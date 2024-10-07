import {GET_COUNTRY_BY_CODE} from "@/graphql/client";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {Country} from "@/types";
import styles from '@/styles/CountryDetails.module.css';

const CountryByCode = () => {

    const [countryCode, setCountryCode] = useState<string>('');
    const [country, setCountry] = useState<Country>({
        code: "",
        emoji: "",
        id: 0,
        name: "",
        continent: {id: 0, name: ""}
    });

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const code = router.query.code as string;
            setCountryCode(code || "");
        }
    }, [router.isReady, router.query.code]);

    const {loading, error} = useQuery(GET_COUNTRY_BY_CODE, {
        variables: {code: countryCode},
        onCompleted: (data) => {
            setCountry(data.country);
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.emoji}>{country.emoji}</div>
            <div>Name : {country.name} ({country.code})</div>
            {country.continent &&
                <div>Continent : {country.continent.name}</div>
            }
        </div>
    )
}

export default CountryByCode;
