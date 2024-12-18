// import axios from 'axios';

// const BASE_URL = 'https://api.github.com/users';

// const fetchUserData = async (username) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/${username}`);
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to fetch user data.');
//     }
// };

// export default fetchUserData;

import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

const fetchAdvancedUserData = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export default fetchAdvancedUserData;
