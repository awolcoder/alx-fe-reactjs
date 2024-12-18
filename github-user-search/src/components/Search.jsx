import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError("Looks like we can't find the user.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Search GitHub username"
                    required
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
                    <p>{userData.name}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        Visit Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
