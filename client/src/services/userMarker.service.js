import http from "../http-common";

class userMarkerDataService {
    getAll() {
        return http.get("/userMarker");
    }
    get(id) {
        return http.get(`/userMarker/${id}`)
    }
    create(data) {
        return http.post("/userMarker", data);
    }
    update(id, data) {
        return http.put(`/userMarker/${id}`, data);
    }
    delete(id) {
        return http.delete(`/userMarker/${id}`);
    }
    deleteAll() {
        return http.delete('/userMarker');
    }
    findByName(name) {
        return http.get(`/userMarker?title=${name}`);
    }
}

export default new userMarkerDataService();