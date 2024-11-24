// src/components/Home.jsx
import React from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { login, logout, isAuthenticated } = useAuth();

    return (
        <div>
            <h1>Home</h1>
            {isAuthenticated ? (
                <>
                    <button onClick={logout}>Logout</button>
                    <Link to="/profile">Go to Profile</Link>
                </>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </div>
    );
};

export default Home;