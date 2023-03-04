/**
 * CRUD main functionality
 * --> blog style app (social media clone app)
 *
 * functionality:
 * (1) CRUD posts
 * (2) ability to like posts
 * (3) like a Todo List App
 */

import { useState } from 'react';

export default function MainContent() {
  const [post, setPost] = useState('');
  const [input, setInput] = useState('');

  const addPost = (e) => {
    e.preventDefault();
    setPost(input);
  };

  const deletePost = () => {};

  return (
    <div>
      <h1>title</h1>
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="button" onClick={addPost}>
          Post
        </button>
        <h3>Content:</h3>
        <p>{post}</p>
        <button type="button" onClick={deletePost}>
          Delete Post
        </button>
      </form>
    </div>
  );
}
