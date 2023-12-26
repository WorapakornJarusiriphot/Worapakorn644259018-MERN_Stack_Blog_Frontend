import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${baseURL}/posts`);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div className="post" key={post._id}>
                    <div className="image">
                        <Link to={`/post/${post._id}`}>
                            <img src={post.cover} alt="" />
                        </Link>
                    </div>
                    <div className="texts">
                        <Link to={`/post/${post._id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p className="info">
                            <a href="" className="author">
                                {post.author}
                            </a>
                            <time>Created at: {new Date(post.createdAt).toLocaleString()}</time>
                            <time>Updated at: {new Date(post.updatedAt).toLocaleString()}</time>
                        </p>
                        <p className="summary">
                            {post.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;
