import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // axios.get("http://localhost:8080/users").then((response) => {
    //   setUsers(response.data);
    // });
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    loadUsers();
  }

  const listOfNames = users.map((user, index) => (
    <tr>
      <th scope="row" key={index}>
        {index + 1}
      </th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">View</Link>
        <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
        <button onClick={() => deleteUser(user.id)} className="btn btn-danger mx-2">Delete</button>
      </td>
    </tr>
  ));
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{listOfNames}</tbody>
        </table>
      </div>
    </div>
  );
};
