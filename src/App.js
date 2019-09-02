import React from 'react';
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Banner from './Banner'
import './styles/style.css'
import './styles/flexslider.css'
import './styles/smoothbox.css'

class App extends React.Component {

    render(){
        return (
            <>
                <Banner/>
                <NewsLetter />
                <Footer />
            </>
        )
    }}



    export default App