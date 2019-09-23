import React from 'react'
import Head from "./Head";
import HomeBanner from "./HomeBanner";
import HomeContent from "./HomeContent";
import Footer from "./Footer";


class Home extends React.Component {
    render() {
        return (
            <>
                <Head/>
                <HomeBanner/>
                <HomeContent/>
            </>
        )
    }
}

export default Home