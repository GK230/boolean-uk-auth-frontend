import React, { useState, useEffect } from "react";
import Post, { PostType } from "../components/Post";
import { getUserPosts } from "../utils/apiClient";

export default function Posts() {
  const [userPosts, setUserPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getUserPosts().then(setUserPosts);
  }, []);

  return (
    <ul className="posts__container">
      {userPosts.map(post => (
        <li>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
