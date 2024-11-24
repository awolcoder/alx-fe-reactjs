// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { id } = useParams(); // Get the dynamic ID from the URL
    return <div>Displaying blog post with ID: {id}</div>;
};

export default BlogPost;