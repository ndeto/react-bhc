import React, {useState, useEffect} from 'react'
import S3FileUpload from 'react-s3';
import Head from "../Head";
import Banner from "../Banner";

function EditProperty(props) {
    // Fetch the data for property
    //Set the state of the values
    //Render data
    //create update handler
    useEffect(() => {
        this.fetchProperty();
    }, []);

    const [property, setProperty] = useState([]);
    const {
        match: {
            params: { propertyId },
            url
        }
    } = this.props;

    const state = {
        id: null
    };

    const settings = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.localStorage.getItem('auth')
        },
        body: JSON.stringify({
            id: state.id,
        })
    };

    const fetchProperty = async () => {
        try {
            const fetchResponse = await fetch(`http://localhost:3000/property/${propertyId}`, settings);
            const data = await fetchResponse.json();
            if (!fetchResponse.ok) {
                alert(fetchResponse.statusText);
            }
            if (fetchResponse.ok) {
                console.log(data);
            }
        } catch (e) {
            return e;
        }
    };


        return(

            <div>

                <Head/>
                <Banner/>
                This is the Property ID: {propertyId}
            </div>
        )



}


export default EditProperty