import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchGitHubUser = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`, // Access API key here
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub user:", error);
        throw error;
    }
};
