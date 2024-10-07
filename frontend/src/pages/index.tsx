import CountriesList from '@/components/CountriesList';
import CountryAdd from '@/components/CountryAdd';
import {Toaster} from "react-hot-toast";

export default function Home() {
    return (
        <div>
            <Toaster/>
            <CountryAdd/>
            <CountriesList/>
        </div>
    );
}
