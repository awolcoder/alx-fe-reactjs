import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Search GitHub username"
                    value={username}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                    <p>Name: {userData.name || 'No name available'}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
