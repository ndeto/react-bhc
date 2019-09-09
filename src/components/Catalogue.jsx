import React, {useEffect, useState} from 'react'
import Filters from './Filters'
import Property from './Property'
import Banner from "./Banner";
import Head from "./Head";
import Footer from "./Footer";


/*const testData = [{
    "name": "The Villas",
    "price": 1000000,
    "location": "Ruiru"
},
    {
        "name": "The Good Villas",
        "price": 10000000,
        "location": "Lavington"
    }
];*/


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
        const data = await fetch('http://localhost:3000/properties', settings);
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
            <Property properties={properties}/>
            <Footer/>
        </>
    )

}

export default Catalogue