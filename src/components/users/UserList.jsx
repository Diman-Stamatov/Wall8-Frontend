import React from "react";
import { useUsers } from "../../context/UsersContext";
import { useLoading } from "../../context/LoadingContext";
import { useError } from "../../context/ErrorContext";


function UserList() {
  const { state } = useUsers();
  const { isLoading } = useLoading();
  const { error, clearError } = useError();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={clearError}>Dismiss</button>
      </div>
    );
  }

  const { users } = state;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
