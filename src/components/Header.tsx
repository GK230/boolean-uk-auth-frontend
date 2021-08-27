import React from "react";
import { Link, useLocation } from "react-router-dom";
import { User } from "../App";
// import { getLogoutUser } from "../utils/apiClient";

type HeaderProps = {
  loggedUser: User | null;
  clearUserState: (data: null) => void;
};

function LoggedInHeader({
  username,
  clearUserState,
}: {
  username: string;
  clearUserState: (data: null) => void;
}) {
  return (
    <>
      <h3>Welcome {username}</h3>
      <button
        onClick={() => {
          getLogoutUser().then(data => clearUserState(data));
        }}
      >
        Logout
      </button>
    </>
  );
}

export default function Header({ loggedUser, clearUserState }: HeaderProps) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Some random app</h1>
      {loggedUser ? (
        <LoggedInHeader
          username={loggedUser.username}
          clearUserState={clearUserState}
        />
      ) : null}
    </header>
  );
}
