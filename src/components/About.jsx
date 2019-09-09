import React from 'react';
import Head from "./Head";
import Banner from "./Banner";
import Filters from "./Filters";
import Footer from "./Footer";

function About() {
    return (
        <>
            <Head/>
            <Banner/>
            <Filters/>
            <h1>About Component</h1>
            <Footer/>
        </>
    )

}

export default About;