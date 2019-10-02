import React, {useEffect, useState} from 'react'
import Filters from './Filters'
import Property from './Property'
import Banner from "./Banner";
import Head from "./Head";
import Footer from "./Footer";


function Catalogue() {

    useEffect(() => {
        fetchProperties();
    }, []);

    const [properties, setProperties] = useState([]);

    const settings = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.localStorage.getItem('auth')
        }
    };



    const fetchProperties = async () => {
        const data = await fetch('https://bhcapi.herokuapp.com/properties', settings);
        const properties = await data.json();
        if (data.ok) {
            setProperties(properties);
        }
    };

    return (
        <>
            <Head/>
            <Banner bannertype={"banner inner-banner"}/>
            <Filters/>
            <Property properties={properties} isAdmin={false}/>
            <Footer/>
        </>
    )

}

export default Catalogue