import axios from 'axios';

const guidesURL = 'http://localhost:3000/guides';

export async function getInitialGuides() {
    let response = await axios.get(guidesURL);
    return response.data;
}
