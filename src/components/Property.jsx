import React from 'react'
import Item from './Item'

const Property = (props) =>
    <>
        {/*Properties page*/}
        <div className="blog_w3ls py-5" id="blog">
            <div className="container py-md-5">
                <h3 className="heading mb-5">Properties</h3>
                <div className="blog-grids">
                    <div className="row">
                        {props.properties.map(property => <Item key={property.name} isAdmin={props.isAdmin} property={property}/>)}
                    </div>
                </div>
            </div>
        </div>
        {/*//Properties page*/}
    </>;
export default Property