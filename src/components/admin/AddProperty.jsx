import React from 'react'
import S3FileUpload from 'react-s3';

class AddProperty extends React.Component {
    state = {
        name: null,
        image: {},
        id: null
    };

    config = (id) => {
        const settings = {
            bucketName: 'card17',
            dirName: `bhc/${id}`, /* optional */
            region: 'us-east-2',
            accessKeyId: 'AKIAIRP66RXFG6BGWDOQ',
            secretAccessKey: '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',
        }
        return settings
    }


    handleFileUpload = e => {
        console.log(e.target.files[0]);
        this.setState({
            image: e.target.files[0],
        });
    };

    updateImage = async (event) => {
        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('auth')
            },
            body: JSON.stringify({
                image: this.state.image
            })
        };
        try {
            const fetchResponse = await fetch(`http://localhost:3000/properties/${this.state.id}`, settings);
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


    handleSubmit = async (event) => {
        event.preventDefault();
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('auth')
            },
            body: JSON.stringify({
                name: this.state.name,
                location: this.state.location,
                size: this.state.size,
                description: this.state.description,
                price: this.state.price,
                image: this.state.image
            })
        };
        try {
            const fetchResponse = await fetch('http://localhost:3000/properties', settings);
            const data = await fetchResponse.json();
            if (!fetchResponse.ok) {
                alert(fetchResponse.statusText);
            }
            if (fetchResponse.ok) {
                console.log(data);
                // S3FileUpload
                S3FileUpload
                    .uploadFile(this.state.image, this.config(data['id']))
                    .then(image_data => {
                        console.log(image_data);
                        this.setState({
                            id: data['id'],
                            image: image_data['location']
                        });
                        this.updateImage();
                    })
                    .catch(err => console.error(err));
            }


        } catch (e) {
            return e;
        }
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label form="property_name">Name</label>
                <input
                    name="property_name"
                    id="property_name"
                    type="text"
                    required
                    value={this.state.name}
                    onChange={event => this.setState({name: event.target.value})}
                />
                <br/>
                <label form="location">Location</label>
                <input
                    name="location"
                    id="location"
                    type="text"
                    required
                    value={this.state.location}
                    onChange={event => this.setState({location: event.target.value})}
                />
                <br/>
                <label form="size">Size</label>
                <input
                    name="size"
                    id="size"
                    type="text"
                    required
                    value={this.state.size}
                    onChange={event => this.setState({size: event.target.value})}
                />
                <br/>
                <label form="price">Price</label>
                <input
                    name="price"
                    id="price"
                    type="text"
                    required
                    value={this.state.price}
                    onChange={event => this.setState({price: event.target.value})}
                />
                <br/>
                <label form="description">Description</label>
                <input
                    name="description"
                    id="description"
                    type="text"
                    required
                    value={this.state.description}
                    onChange={event => this.setState({description: event.target.value})}
                />
                <br/>
                <input type='file' name="image" multiple="true" onClick={this.readFile}
                       onChange={this.handleFileUpload}/>
                <br/>
                <button type="submit">Add Property</button>
            </form>
        )
    }
}


export default AddProperty