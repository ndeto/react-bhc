import React, {useEffect, useState} from 'react'
import AddProperty from "./AddProperty";
import Head from "./../Head";
import Banner from "./../Banner";
import Catalogue from "./../Catalogue";
import Property from "./../Property";


function AdminHome(){

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



        return(
            <div>
                <Head />
                <Banner />
                <Property properties={properties} isAdmin={true} />
            </div>
        )

}



export default AdminHome