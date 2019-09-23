import React, {Component} from 'react'

class ViewProperty extends Component {

    images = ["bhc/29/69991431_145411753373763_1622348957474619392_o.jpg","bhc/30/70381450_2101195999985502_3666723463038500864_n.jpg"];

    render() {
        return (
            <div>
                <h1>This is a property </h1>;
                {this.images.map( image => {
                    console.log(`https://card17.s3.us-east-2.amazonaws.com/${image}`)
                })}
            </div>
            )

    }
}



export default ViewProperty