import React,{useState} from 'react'
import { TextField,Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    field: {
        border: '1px solid green',
        marginLeft: '15px'
    },
    form: {
        padding: '10px',
    },
    addBtn:{
        marginTop: '10px',
        marginLeft: '30px'
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

const CreateData = ({addUser}) => {
    const initialFormState = { id: null, name: '', description: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

    const onSubmit = (event) => {
        event.preventDefault()
        console.log("clicked");
       if (!user.name || !user.description) return
               addUser(user)
               setUser(initialFormState)
    }

    const classes = useStyles()
    return (
    <form onSubmit={onSubmit} className={classes.form}>
        <TextField
          id="filled-error-helper-text"
          name="name"
          label="Name"
          onChange={handleInputChange}
          value={user.name}
          variant="outlined"
          className={classes.field}
          InputProps={{
            classes: {
              root: classes.root,
              focused: classes.focused,
              notchedOutline: classes.notchedOutline,
            },
        }}
        />  
        <TextField
          id="filled-error-helper-text"
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
            },
        }}

        />
        <Button type="submit" variant="contained" className={classes.addBtn}>Add New Task</Button>
    </form>
    )
}

export default CreateData
