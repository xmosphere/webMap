const { userMarkerModel } = require("../models/userMarker.model.js");
const db = require("../models");
var userMarker = db.userMarker;

//Create and save marker
exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({message: "Name cannot be empty"});
        return;
    }
    if(!req.body.description) {
        res.status(400).send({message: "Description cannot be empty"});
        return;
    }
    if(!req.body.latitude) {
        res.status(400).send({message: "Latitude cannot be empty"});
        return;
    }
    if(!req.body.longitude) {
        res.status(400).send({message: "Longitude cannot be empty"});
        return;
    }

    const userMarker = new userMarkerModel({
        name: req.body.name,
        description: req.body.description,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });

    userMarker
        .save(userMarker)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred when creating a marker"
            });
        });
};

//Returns all markers from the database
exports.findAll = (req, res) => {
    const name = req.query.title;
    const condition = name ? {name: {$regex: new RegExp(name), $options: "i"} } : {};

    userMarker.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred when finding a marker"
            });
        });
};

//Finds and returns marker with id
exports.findOne = (req, res) => {
    const id = req.params.id;

    userMarker.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Marker not found with id: " + id});
        })
        .catch(err => {
            res
                .status(500)
                .send("An error occurred when finding a marker with id: " + id)
        })
};

//Update marker by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty!"
        });
    }

    const id = req.params.id;

    userMarker.findByIdAndUpdate(id, req.body, {useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update marker with id: ${id}`
                });
            } else res.send({message: "Marker Updated successfully!"});
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating marker with id: " + id
            });
        });
};

//Delete Marker by id
exports.delete = (req, res) => {
    const id = req.params.id;

    userMarker.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Cannot delete marker with id: " + id
                });
            } else {
                res.send({
                    message: "Marker deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete marker with id: " + id
            });
        });
};
//Delete all markers
exports.deleteAll = (req, res) => {
    userMarker.deleteMany({})
        .then(data=> {
            res.send({
                message: `${data.deletedCount} markers were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while removing all markers."
            });
        });
};
