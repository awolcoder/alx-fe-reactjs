// src/components/Profile.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <nav>
                <Link to="details">Profile Details</Link>
                <Link to="settings">Profile Settings</Link>
            </nav>
            <Outlet /> {/* Renders the nested routes */}
        </div>
    );
};

export default Profile;