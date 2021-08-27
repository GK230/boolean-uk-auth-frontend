import React from "react";

export type PostType = {
  id: number;
  imageUrl: string;
  text: string;
  user: { username: string };
};

type PostProps = {
  post: PostType;
};

export default function Post({ post: { imageUrl, user, text } }: PostProps) {
  return (
    <article className="post">
      <h3>Posted by {user.username}</h3>
      <img src={imageUrl} alt="random img" srcSet="" />
      <p>{text}</p>
    </article>
  );
}
