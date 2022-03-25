import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
  header: {
    background: '#111111'
  },
  tabs: {
    color: '#FFFFFF',
    textDecoration: 'none',
    marginRight: 20,
  }
})

export const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} exact to='/'>HOMEPAGE</NavLink>
        <NavLink className={classes.tabs} exact to='/all-competidores'>COMPETIDORES</NavLink>
        <NavLink className={classes.tabs} exact to='/all-pistas'>PISTAS</NavLink>
        <NavLink className={classes.tabs} exact to='/all-historicos'>HISTÓRICOS</NavLink>
        <NavLink className={classes.tabs} exact to='/all-competidores-nao-correram'>COMPETIDORES SEM CORRIDA</NavLink>
        <NavLink className={classes.tabs} exact to='/all-competidores-tempo-medio'>TEMPO MÉDIO DOS COMPETIDORES</NavLink>
        <NavLink className={classes.tabs} exact to='/all-pistas-utilizadas'>PISTAS UTILIZADAS</NavLink>
      </Toolbar>
    </AppBar>
  )
}
