import {
  colors,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 100px",
  },
  table: {
    Width: 10,
    minHeight: 100,
    background: "#D3D3D3",
  },
  heading: {
    fontSize: "32px",
    background: "#C3B1E1",
  },
});

const People = ({ data }) => {
  console.log("DATA", data.data.results);
  const classes = useStyles();

  const pageNumber = data.config.url.slice(-1);

  return (
    // <div className="card">
    //   <Link to={`/modal/${pageNumber}`}>{person.name}</Link>
    //   <p>DOB: {person.birth_year}</p>
    //   <p>Gender: {person.gender}</p>
    // </div>
    <div>
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.heading}>
            <TableRow>
              <TableCell>Person Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.results.map((person) => (
              <TableRow key={person.name}>
                <TableCell>
                  <Link
                    to={`/modal/${pageNumber}`}
                    style={{
                      color: "black",
                    }}
                    className="userNameLink"
                  >
                    {" "}
                    {person.name}
                  </Link>
                </TableCell>
                <TableCell>{person.birth_year}</TableCell>
                <TableCell>{person.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default People;
