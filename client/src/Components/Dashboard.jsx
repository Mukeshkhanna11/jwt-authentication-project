import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3000/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/");
      }
    });
  });
  return (
    <>
      <nav>
        <ul>
          <li className="btn">
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Dashboard;
