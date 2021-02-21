import axios from "axios";

export default {
    //get: query => {
    //    console.log("get: ", query);
    //    return axios.get(`api/routation/${query}`);
    //},
    post: query => {
        console.log("post: ", query);
        return axios.post(`api/email`, query);
    },
    //put: query => {
    //    console.log("put: ", query);
    //    return axios.put("api/routation/", query);
    //},
    //delete: query => {
    //    console.log("delete: ", query);
    //    return axios.delete(`api/routation/${query}`);
    //}
};
