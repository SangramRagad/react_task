import React, { useEffect, useState } from "react";
import axios from "axios";
import MyPagination from "./MyPagination";

function UserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUers = () => {
    setLoading(true);
    let data = JSON.parse(sessionStorage.getItem("usersData"));
    if (data) {
      setUsers(data);
      setLoading(false);
    } else {
      console.log("Called Axios");
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setUsers(response.data);
          sessionStorage.setItem("usersData", JSON.stringify(response.data));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchUers();
  }, []);

  return (
    <div>
      <h2>User list table</h2>
      {loading ? <h3>Loading...</h3> : ""}
      <MyPagination users={users} />
    </div>
  );
}

export default UserData;
