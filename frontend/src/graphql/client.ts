import {gql} from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
    query countries {
        countries {
            code
            emoji
            id
            name
        }
    }
`;

export const GET_COUNTRY_BY_CODE = gql`
    query countryByCode($code: String!) {
        country(code: $code) {
            code
            emoji
            id
            name
            continent {
                id
                name
            }
        }
    }
`;

export const ADD_COUNTRY = gql`
    mutation AddCountry($data: NewCountryInput!) {
        addCountry(data: $data) {
            id
            name
            code
            emoji
        }
    }
`;
