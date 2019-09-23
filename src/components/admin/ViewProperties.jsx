import React from 'react'
import ViewProperty from "../ViewProperty";
import EditProperty from "./EditProperty";



class ViewProperties extends React.Component{
    state = {
        properties: []
    };

    render() {
        return (
            <div>
                {this.properties.map( property =>
                <EditProperty />
                )}
            </div>
        )
    }

}