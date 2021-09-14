import React, { useState } from "react";
import axios from "axios";
import People from "./People";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const NewPagination = () => {
  const params = useParams();

  const [page, setPage] = useState(params.page || 1);

  const fetchData = async (page) => {
    console.log("FETCH DATA");
    console.log(page);
    const res = await axios.get(`http://swapi.dev/api/people/?page=${page}`);
    return res;
  };
  const { data, status } = useQuery(["users", page], () => fetchData(page));
  return (
    <div>
      <h2>Employee Records</h2>
      {status === "loading" && <div>Loading data..</div>}

      {status === "error" && <div>Error to fetching data..</div>}

      {status === "success" && (
        // <div className="container">
        //   {data.data.results.map((person) => (
        //     <Planet key={person.name} person={person} data={data} />
        //   ))}
        // </div>
        <People data={data} />
      )}
      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>
      <button onClick={() => setPage(4)}>page 4</button>
    </div>
  );
};

export default NewPagination;
