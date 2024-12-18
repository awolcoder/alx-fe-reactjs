// import React, { useState } from 'react';
// import fetchUserData from '../services/githubService';

// const Search = () => {
//     const [username, setUsername] = useState('');
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);

//     const handleInputChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//         setError(false);
//         setUserData(null);

//         try {
//             const data = await fetchUserData(username);
//             setUserData(data);
//         } catch (error) {
//             setError(true);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleFormSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Search GitHub username"
//                     value={username}
//                     onChange={handleInputChange}
//                 />
//                 <button type="submit">Search</button>
//             </form>

//             {loading && <p>Loading...</p>}
//             {error && <p>Looks like we cant find the user</p>}
//             {userData && (
//                 <div>
//                     <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
//                     <p>Name: {userData.name || 'No name available'}</p>
//                     <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
//                         View Profile
//                     </a>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Search;


import React, { useState } from 'react';
import fetchAdvancedUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(false);
        setUsers([]);

        const query = [];
        if (username) query.push(`user:${username}`);
        if (location) query.push(`location:${location}`);
        if (minRepos) query.push(`repos:>=${minRepos}`);
        const queryString = query.join('+');

        try {
            const data = await fetchAdvancedUserData(queryString);
            setUsers(data.items);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                    type="text"
                    name="username"
                    placeholder="Search by username"
                    value={username}
                    onChange={handleInputChange}
                    className="block w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Filter by location"
                    value={location}
                    onChange={handleInputChange}
                    className="block w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="minRepos"
                    placeholder="Minimum repositories"
                    value={minRepos}
                    onChange={handleInputChange}
                    className="block w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {loading && <p className="mt-4 text-center">Loading...</p>}
            {error && <p className="mt-4 text-center text-red-500">Error fetching users.</p>}
            {users.length > 0 && (
                <div className="mt-4 space-y-4">
                    {users.map((user) => (
                        <div key={user.id} className="p-4 border rounded flex items-center space-x-4">
                            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                            <div>
                                <p className="font-bold">{user.login}</p>
                                <p>{user.location || 'Location not specified'}</p>
                                <p>Repos: {user.public_repos}</p>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
