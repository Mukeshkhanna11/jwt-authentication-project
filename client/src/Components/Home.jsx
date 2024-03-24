import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <nav>
        <h1>website</h1>
        <ul>
          <li className="btn">
            <button>
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </li>

          <li className="btn">
            <button onClick={handleLogout}>Logout</button>
          </li>

          <li className="btn">
            <button>
              <Link to="/login">Login</Link>
            </button>
          </li>

          <li>
            <button>
              <Link to="/signup">Sign up</Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
