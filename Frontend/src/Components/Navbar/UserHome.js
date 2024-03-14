import React from "react";
import Layout from "../Navbar/UserLayout";
import { Link } from "react-router-dom";
import Restaurant from "../img/homeimg.png";
import "../Navbar/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Restaurant})` }}>
        <div className="headContainer">
          <h1>Foodie Jungle</h1>
          <p>Best Food in India</p>
          {/* <Link  to="/menu">

                   </Link> */}
          <button>
            <Link to="/Signin"> Login</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
