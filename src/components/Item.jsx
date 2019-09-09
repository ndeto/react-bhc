import React from 'react'


const Item = (props) => {

    const property = props.property;

    return (
        <>
            {/*property grid */}
            <div className="col-lg-4 col-md-6">
                <div className="card border-0 med-blog">
                    <div className="card-header p-0">
                        {/*<img className="card-img-bottom" src="../images/right.png" alt="Card image cap" />*/}
                        <img src={require('./../images/right.png')} alt={property.name} className="card-img-bottom"/>
                    </div>
                    <div className="detail">
                        <h4 className="title mb-2"><a href="contact.html">{property.name} ({property.location})</a></h4>
                        <ul className="facilities-list clearfix">
                            <li>
                                <span className="fa fa-bed"></span> 3 Bedrooms
                            </li>
                            <li>
                                <span className="fa fa-bath"></span> 2 Bathrooms
                            </li>
                            <li>
                                <span className="fa fa-building"></span> {property.size}
                            </li>
                            <li>
                                <span className="fa fa-building"></span> 1 Garage
                            </li>
                        </ul>
                        <p className="mt-2">Integer pulvinar leo id viverra feugiat. Et Pellentesque libero justo.</p>
                    </div>
                </div>
            </div>
            {/*/property grid*/}
        </>
    )
}


export default Item