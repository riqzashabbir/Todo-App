import React,{useEffect, useState} from 'react'
import { TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    cancel: {
        marginTop: '10px',
        marginLeft: '30px',
    },
    update: {
        marginTop: '10px',
        marginLeft: '20px',
    },
    field: {
        border: '1px solid green',
        marginLeft: '15px'
    },
    form: {
        padding: '30px',
    },
    root: {
        '&:hover:not($disabled):not($error) $notchedOutline': {},
        '&$focused $notchedOutline': {
          border: '1px solid green',
        },
      },
      focused: {},
      notchedOutline: {},
})

const EditUser = ({setEditing, currentUser, updateUser}) => {
    const classes = useStyles()
        const [ user, setUser ] = useState(currentUser)

        useEffect(() => {
            setUser(currentUser)
          },[])
      
        const handleInputChange = event => {
          const { name, value } = event.target
          setUser({ ...user, [name]: value })
        }

        const editUser = (event) => {
          console.log('edit userclicked');
            event.preventDefault()
            updateUser(user.id, user)
        }
      
        return (
          <form onSubmit={editUser} className={classes.form}>
              <TextField 
              name="name" 
              label="Name" 
              value={user.name} 
              varient="outlined" 
              onChange={handleInputChange}  
              className={classes.field}
              InputProps={{
                classes: {
                root: classes.root,
                focused: classes.focused,
                notchedOutline: classes.notchedOutline,
                },}}
                />
              <TextField 
               name="description"
                label="Description"
                value={user.description} 
                onChange={handleInputChange} 
                variant="outlined"
                className={classes.field}
                InputProps={{
                  classes: {
                  root: classes.root,
                  focused: classes.focused,
                  notchedOutline: classes.notchedOutline,
                  }, }}
                  />
            <Button variant="contained" type="submit" className={classes.update}> Update user </Button>
            <Button onClick={() => setEditing(false)} className={classes.cancel}> Cancel </Button>
          </form>
        )
    }
   

export default EditUser
