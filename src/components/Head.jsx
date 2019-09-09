import React from 'react'
import Nav from "./Nav";

const Head = (props) =>


        <>
            {/*header*/}
            <header className="py-4">
                <div className="container">
                    <div id="logo">
                        <h1><a href="index.html"><span className="fa fa-home" aria-hidden="true"></span> Estate Town</a>
                        </h1>
                    </div>
                    {/*nav*/}
                    <Nav />
                    <div className="clear"></div>
                    {/*nav*/}
                </div>
            </header>
            {/*header*/}
        </>



export default Head