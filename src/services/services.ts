import axios from "axios";
import { Moment } from "../models/momentmodel";

const baseUrl = 'http://localhost:5001/ginkgo-127db/us-central1/api/';

export function getUserMoments(id: string): Promise<Moment[]>{
    return axios.get(baseUrl + 'memories/' + id)
    .then(response => response.data); // this is weird - I don't know where the "moment" piece is coming from.
}

export function postNewMoment(moment: Moment):Promise<Moment>{
    return axios.post(baseUrl + '/memories/', moment)
    .then(response => response.data)
}

export function putMoments(id: string, moment: Moment): Promise<Moment>{
    return axios.put(baseUrl + '/memories/' + id, moment)
    .then(response=>response.data)
}