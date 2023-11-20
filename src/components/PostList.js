// PostList.js
import React, { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your API
    // Replace this with actual API call
    fetch('https://api.example.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>{post.content}</p>
            <small>By {post.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;