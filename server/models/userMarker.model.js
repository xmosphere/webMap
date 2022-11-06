module.exports = mongoose => {
    var schema = mongoose.Schema(
            {
                name: String,
                description: String,
                latitude: String,
                longitude: String
            },
            { timestamps: true }
        );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const userMarker = mongoose.model("usermarker", schema);
    return userMarker;
};