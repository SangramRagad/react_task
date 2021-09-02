import React,{useEffect, useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios"
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  container:{
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   padding:"5px 80px"
  } , 
  table: {
      Width: 100,
      minHeight:200,
      background:"#DEB887"
     
    },
    heading:{
      fontSize:"32px",
      background:"gray"
    }
  });
  
function UserData() {
    const classes = useStyles();
    const [users, setUsers]=useState([])
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
          setUsers(response.data)
             })       
            .catch(err=>{
                console.log(err)})
        },[])
  
    return (
      <div>
        <h2>User list table</h2>
            <TableContainer className={classes.container} component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.heading}>
                  <TableRow >
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Company</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell component="th" scope="row">                      
                        <Link to="/modal"> {user.name}</Link>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {user.email}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {user.phone}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {user.company.name}
                      </TableCell>                    
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </div>
      );   

    
        
}

export default UserData
