import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

export const AddUser = () => {

  let navigate = useNavigate();

  const [user, setUser] = React.useState({
    name:"",
    username:"",
    email:""
  })

  //deconstruct the object
  const {name, username, email} = user

  const onInputChange = (e) => {
    //use the spread operator to keep on adding the properties of the object
    setUser({ ...user, [e.target.name]: e.target.value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user)
    navigate("/")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input 
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input 
                type="text"
                className="form-control"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input 
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                />
            </div>
            <button type="submit" className="btn btn-outline-primary mx-2">Submit</button>
            <Link to="/" className="btn btn-outline-danger">Cancel</Link>
            </form>
        </div>
      </div>
    </div>
  );
};
