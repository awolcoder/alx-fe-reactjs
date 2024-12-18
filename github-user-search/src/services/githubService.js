import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

const fetchAdvancedUserData = async ({ username = '', location = '', minRepos = 0 }) => {
    try {
        const queryParts = [];
        if (username) queryParts.push(`user:${username}`);
        if (location) queryParts.push(`location:${location}`);
        if (minRepos) queryParts.push(`repos:>${minRepos}`);
        const query = queryParts.join(' ');
        const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
        return response.data.items; // Returning the list of users
    } catch (error) {
        console.error('Error fetching advanced user data:', error);
        throw error;
    }
};

export default fetchAdvancedUserData;

