import React from "react";
import userMarkerService from "../../services/userMarker.service";
import withRouter from "../../withRouter/withRouter"
//import { name } from 'process';
import { StInput, StButton } from "./crudElements.js";

class EditUserMarker extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLatitude = this.onChangeLatitude.bind(this);
        this.onChangeLongitude = this.onChangeLongitude.bind(this);
        this.getUserMarker = this.getUserMarker.bind(this);
        this.updateUserMarker = this.updateUserMarker.bind(this);
        this.deleteUserMarker = this.deleteUserMarker.bind(this);

        this.state = {
            currentUserMarker: {
                id: null,
                name: "",
                description: "",
                latitude: null,
                longitude: null
            },
            message: ""
        };
    }
    componentDidMount() {
        this.getUserMarker(this.props.router.params.id)
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function(prevState) {
            return {
                currentUserMarker: {
                    ...prevState.currentUserMarker,
                    name: name,
                }
            }
        })
    }
    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(function(prevState) {
            return {
                currentUserMarker: {
                    ...prevState.currentUserMarker,
                    description: description,
                }
            }
        })
    }markers
    onChangeLatitude(e) {
        const latitude = e.target.value;

        this.setState(function(prevState) {
            return {
                currentUserMarker: {
                    ...prevState.currentUserMarker,
                    latitude: latitude,
                }
            }
        })
    }
    onChangeLongitude(e) {
        const longitude = e.target.value;

        this.setState(function(prevState) {
            return {
                currentUserMarker: {
                    ...prevState.currentUserMarker,
                    longitude: longitude,
                }
            }
        })
    }
    getUserMarker(id) {
        userMarkerService.get(id)
            .then(response => {
                this.setState(prevState => ({
                    currentUserMarker: {
                        ...prevState.currentUserMarker
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    updateUserMarker() {
        userMarkerService.update(
            this.state.currentUserMarker.id,
            this.state.currentUserMarker
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The Marker was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }
    deleteUserMarker() {
        userMarkerService.delete(this.state.currentUserMarker.id)
            .then(response => {
                console.log(response.data);
                this.props.router.navigate('/userMarker');
            })
            .catch(e => {
                console.log(e);
            });
    }
    render () {
        const {currentUserMarker} = this.state;
        
        return (
            <div>
                {currentUserMarker ? (
                    <div className="edit-form">
                        <h4>Marker</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <StInput
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentUserMarker.name}
                                    onChange={this.onChangeName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <StInput
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentUserMarker.description}
                                    onChange={this.onChangeDescription} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="latitude">Latitude</label>
                                <StInput
                                    type="text"
                                    className="form-control"
                                    id="latitude"
                                    value={currentUserMarker.latitude}
                                    onChange={this.onChangeLatitude} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="longitude">Longitude</label>
                                <StInput
                                    type="text"
                                    className="form-control"
                                    id="longitude"
                                    value={currentUserMarker.longitude}
                                    onChange={this.onChangeLongitude} />
                            </div>
                        </form>
                        <br />
                        <StButton className="badge badge-danger mr-2"
                        onClick={() => this.deleteUserMarker}>Delete</StButton>
                        <StButton className="badge badge-success" type="submit"
                        onClick={() => this.updateUserMarker}>Update</StButton>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Marker...</p>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(EditUserMarker);