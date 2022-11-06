import React from "react";
import userMarkerService from "../../services/userMarker.service";
import { Link } from "react-router-dom";
import { StInput, StButton } from "./crudElements.js";

export default class ReturnUserMarker extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.returnUserMarkerList = this.returnUserMarkerList.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveMarker = this.setActiveMarker.bind(this);
        this.removeAllMarkers = this.removeAllMarkers.bind(this);
        this.searchName = this.searchName.bind(this);

        this.state = {
            userMarkers : [],
            currentMarker: null,
            currentIndex: -1,
            searchMarker: ""
        };
    }

    componentDidMount() {
        this.returnUserMarkerList();
    }

    onChangeSearchName(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    returnUserMarkerList() {
        userMarkerService.getAll()
            .then(response => {
                this.setState({
                    userMarkers: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.returnUserMarkerList();
        this.setState({
            currentIndex: null,
            currentIndex: -1
        });
    }
    
    setActiveMarker(userMarker, index) {
        this.setState({
            currentMarker: userMarker,
            currentIndex: index
        });
    }

    removeAllMarkers() {
        userMarkerService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchName() {
        userMarkerService.findByName(this.state.searchName)
            .then(response => {
                this.setState({
                    userMarkers: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render () {
        const {searchName, userMarkers, currentMarker, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <StInput
                            type="text"
                            className="form-control"
                            placeholder="Search by name"
                            value={searchName}
                            onChange={this.onChangeSearchName}
                        />
                        <div className="input-group-append">
                            <StButton className="btn btn-outline-secondary"type="button"
                                onClick={this.searchName}>Search</StButton>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Marker List</h4>
                    <ul className="list-group">
                        {userMarkers &&
                            userMarkers.map((userMarker, index) => (
                                <li className={"list-group-item " +
                                (index === currentIndex ? "active" : "")}
                                onClick={() => this.setActiveMarker(userMarker, index)}
                                key={index}>
                                    {userMarker.name}
                                </li>
                            ))}
                    </ul>
                    <button
                        className="m-3 btn-sm btn-danger"
                        onClick={this.removeAllMarkers}>Remove All</button>
                </div>
                <div className="col-md-6">
                    {currentMarker ? (
                        <div>
                            <h4>Marker</h4>
                            <div>
                                <label>
                                    <span>Name:</span>
                                </label>{" "}
                                {currentMarker.name}
                            </div>
                            <div>
                                <label>
                                    <span>Description:</span>
                                </label>{" "}
                                {currentMarker.description}
                            </div>
                            <div>
                                <label>
                                    <span>Latitude:</span>
                                </label>{" "}
                                {currentMarker.latitude}
                            </div>
                            <div>
                                <label>
                                    <span>Longitude:</span>
                                </label>{" "}
                                {currentMarker.longitude}
                            </div>
                            <Link to={"/editUserMarker/" + currentMarker.id}
                                className="badge badge-warning" >Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Select a Marker</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}