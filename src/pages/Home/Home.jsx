import { useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const port = "http://localhost:7000";
  let navigate = useNavigate();
  function nav() {
    navigate("/doctors");
  }
  // useEffect(() => {
  //   axios
  //     .get(port + "/isUserAuth", {
  //       headers: { "x-access-token": localStorage.getItem("token") },
  //     })
  //     .then((response) => {
  //       if (!response.data.auth) {
  //         navigate("/login");
  //       }
  //     });
  // }, []);

  return (
    <div>
      <h1>asfdsdf</h1>
    </div>
  );
}
export default Home;
