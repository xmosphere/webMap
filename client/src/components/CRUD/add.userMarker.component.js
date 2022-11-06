import React from "react";
import userMarkerDataService from "../../services/userMarker.service.js";
import { StInput, StButton } from "./crudElements.js";


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
            id: "",
            name: "",
            description: "",
            latitude: "",
            longitude: ""
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeLatitude(e) {
        this.setState({
            latitude: e.target.value
        });
    }
    onChangeLongitude(e) {
        this.setState({
            longitude: e.target.value
        });
    }
    saveUserMarker() {
        var data = {
            name: this.state.name,
            description: this.state.description,
            latitude: this.state.latitude,
            longitude: this.state.longitude
        };
        userMarkerDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    latitude: response.data.latitude,
                    longitude: response.data.longitude
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    newUserMarker() {
        this.setState({
            id: "",
            name: "",
            description: "",
            latitude: "",
            longitude: ""
        });
    }

    render () {
        return (
            <div className="submit-form">
                {/* {this.state.submitted ? (
                    <div>
                        <h4>You submitted a Marker!</h4>
                        <button className="btn btn-success" onClick={this.newUserMarker}>
                            Add Marker
                        </button>
                    </div>
                ) : ( */}
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <StInput
                            type="text"
                            className="form-control"
                            //formControlName="name"
                            id="name"
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description: </label>
                        <StInput
                            type="text"
                            className="form-control"
                            //formControlName="description"
                            id="description"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            name="description"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="latitude">Latitude: </label>
                        <StInput
                            type="text"
                            className="form-control"
                            //formControlName="latitude"
                            id="latitude"
                            required
                            value={this.state.latitude}
                            onChange={this.onChangeLatitude}
                            name="latitude"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="longitude">Longitude: </label>
                        <StInput
                            type="text"
                            className="form-control"
                            //formControlName="longitude"
                            id="longitude"
                            required
                            value={this.state.longitude}
                            onChange={this.onChangeLongitude}
                            name="longitude"
                        />
                    </div>
                    <br />
                    <StButton onClick={this.saveUserMarker} className="btn btn-success">
                        Submit {this.props.description}
                    </StButton>
            {/*} )} */}
        </div>
        );
    }
}