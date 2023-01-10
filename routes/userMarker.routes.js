module.exports = app => {
    const userMarker = require("../controllers/userMarker.controller.js");

    var router = require("express").Router();

    //create a new marker
    router.post("/", userMarker.create);

    //return all markers
    router.get("/", userMarker.findAll);

    //return by id value
    router.get("/:id", userMarker.findOne);

    //update a marker by id value
    router.put("/:id", userMarker.update);

    //delete a marker by id value
    router.delete("/:id", userMarker.delete);

    //delete all markers
    router.delete("/:id", userMarker.deleteAll);

    app.use('/api/userMarker', router)
}