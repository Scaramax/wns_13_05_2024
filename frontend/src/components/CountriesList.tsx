import React from 'react';
import {useRouter} from 'next/router';
import {Country} from '@/types';
import {GET_ALL_COUNTRIES} from '@/graphql/client';
import {useQuery} from "@apollo/client";
import CountryCard from "./CountryCard";
import styles from '@/styles/CountriesList.module.css';

const CountriesList = () => {
    const [countries, setCountries] = React.useState<Country[]>([]);
    const router = useRouter();

    const {loading, error} = useQuery(GET_ALL_COUNTRIES, {
        onCompleted: (data) => {
            setCountries(data.countries);
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    function handleCountryClick(countryCode:string) {
        router.push(`/country/${countryCode}`);
    }

    return (
        <div>
            <div className={styles.countriesCardWrapper} >
                {countries.map((country: Country) => (
                    <div onClick={() => handleCountryClick(country.code)}>
                        <CountryCard key={country.id} country={country}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountriesList;
