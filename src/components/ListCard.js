import React from 'react'
import {Delete, EditOutlined} from '@mui/icons-material'
import {Table,TableBody, TableCell, Box,TableHead, TableRow,IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    table: {
    border: '2px solid green',
    width: '50%',
    marginLeft: '25%',
    },
})

const ListCard = ({users, editRow, deleteUser}) => {
    const classes = useStyles()
    return (
        <Box className={classes.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users?.map((user) => (
            <TableRow key={user.name}>
              <TableCell component="th" scope="user"> {user.name} </TableCell>
              <TableCell align="center">{user.description}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit" size="large" onClick={() => {editRow(user)}}> 
                    <EditOutlined  /> 
                </IconButton>
                <IconButton aria-label="edit" size="large" onClick={() => deleteUser(user.id)}> 
                    <Delete  />  
                </IconButton> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
          );
        };
        

export default ListCard
