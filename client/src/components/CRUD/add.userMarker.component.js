import React from "react";
import userMarkerDataService from "../../services/userMarker.service.js";
import { StInput, StButton } from "./crudElements.js";
import BootButton from 'react-bootstrap/Button'

export default class AddUserMarker extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLatitude = this.onChangeLatitude.bind(this);
        this.onChangeLongitude = this.onChangeLongitude.bind(this);
        this.saveUserMarker = this.saveUserMarker.bind(this);
        this.newUserMarker = this.newUserMarker.bind(this);

        this.state = {
            name: "",
            description: "",
            latitude: 0,
            longitude: 0
        };
    }
    componentDidMount() { }
    componentWillUnmount() { }

    onChangeName(e) {
        const name = e.target.value;

        this.setState({
            name: name
        });
        //console.log(e.target.name)
        //console.log(this.state.name)
    }
    onChangeDescription(e) {
        const description = e.target.value;

        this.setState({
            description: description
        });
        //console.log(e.target.description)
        //console.log(this.state.description)
    }
    onChangeLatitude(e) {
        const latitude = e.target.value;

        this.setState({
            latitude: latitude
        });
        //console.log(e.target.latitude)
        //console.log(this.state.latitude)
    }
    onChangeLongitude(e) {
        const longitude = e.target.value;

        this.setState({
            longitude: longitude
        });
        //longitude: e.target.value
        //console.log(this.state.longitude)
    }
    saveUserMarker() {
        console.log(this.state.name)
        var data = {
            name: this.state.name,
            description: this.state.description,
            latitude: this.state.latitude,
            longitude: this.state.longitude
        };
        console.log(data);
        userMarkerDataService.create(data)
            .then(response => {
                console.log(response)
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    latitude: response.data.latitude,
                    longitude: response.data.longitude
                });
            })
            .catch(e => {
                console.log(e);
            });
    }
    newUserMarker() {
        this.setState({
            name: "",
            description: "",
            latitude: 0,
            longitude: 0
        });
    }

    render () {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted a Marker!</h4>
                        <button className="btn btn-success" onClick={this.props.newUserMarker}>
                            Add Marker
                        </button>
                    </div>
                ) : (
                        <div>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="latitude">Latitude: </label>
                            <input
                                type="number"
                                className="form-control"
                                id="latitude"
                                required
                                value={this.state.latitude}
                                onChange={this.onChangeLatitude}
                                name="latitude"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="longitude">Longitude: </label>
                            <input
                                type="number"
                                className="form-control"
                                id="longitude"
                                required
                                value={this.state.longitude}
                                onChange={this.onChangeLongitude}
                                name="longitude"
                            />
                        </div>
                        <br />
                        <BootButton variant="outlined" onClick={this.saveUserMarker} className="btn btn-success">
                            Submit
                        </BootButton>
                    </div>
                 )}
            </div>
            );
    }
}