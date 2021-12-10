import React from 'react'
import {AppBar, Box, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  typography:{
    height: '50px',
    paddingTop: '20px',
    fontStyle: 'bold'
    
  },
})

const Header = () => {
  const classes = useStyles()
    return (
        <AppBar position="static" >
        <Box >
          <Typography component="h1" className={classes.typography}> Amplify ToDo App </Typography>
        </Box>
      </AppBar>
    )
}

export default Header
