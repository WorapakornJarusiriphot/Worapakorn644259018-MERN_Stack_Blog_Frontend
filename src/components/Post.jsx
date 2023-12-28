import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
const baseURL = import.meta.env.VITE_BASE_URL;

const Post = ({ _id, cover, title, author, summary, createdAt, updatedAt }) => {
    console.log(cover, author);
    return (
        <div className="post">
            <div className="image">
                <Link to={`/post/${_id}`}>
                    <img src={`${baseURL}/${cover}`} alt="" />
                </Link>
            </div>
            <div className="texts">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <a href="" className="author">
                        {author.username}
                    </a>
                    <time>Created at: {format(new Date(createdAt), "dd MM yyyy HH:MM")}</time>
                    <time>Updated at: {format(new Date(updatedAt), "dd MM yyyy HH:MM")}</time>
                </p>
                <p className="summary">
                    {summary}
                </p>
            </div>
        </div>
    );
};

export default Post;
