import axios from 'axios';

const toursURL = 'http://localhost:3000/tours';

export async function getInitialTours() {
    let response = await axios.get(toursURL);
    return response.data;
}

export async function getSpecificTour(id) {
    let response = await axios.get(toursURL + '/' + id);
    return response.data;
}
