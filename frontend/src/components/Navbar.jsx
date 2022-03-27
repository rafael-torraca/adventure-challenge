import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import HistoryIcon from '@material-ui/icons/History';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyle = makeStyles({
  header: {
    background: '#111111'
  },
  tabs: {
    color: '#FFFFFF',
    textDecoration: 'none',
    marginRight: 25,
  }
})

export const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} exact to='/'><HomeIcon />HOMEPAGE</NavLink>
        <NavLink className={classes.tabs} exact to='/all-competidores'><DirectionsRunIcon />COMPETIDORES</NavLink>
        <NavLink className={classes.tabs} exact to='/all-pistas'><CalendarViewDayIcon />PISTAS</NavLink>
        <NavLink className={classes.tabs} exact to='/all-historicos'><HistoryIcon />HISTÓRICOS</NavLink>
        <NavLink className={classes.tabs} exact to='/all-competidores-nao-correram'><EmojiPeopleIcon />COMPETIDORES SEM CORRIDA</NavLink>
        <NavLink className={classes.tabs} exact to='/all-competidores-tempo-medio'><AssignmentIndIcon />TEMPO MÉDIO DOS COMPETIDORES</NavLink>
        <NavLink className={classes.tabs} exact to='/all-pistas-utilizadas'><AssignmentIcon />PISTAS UTILIZADAS</NavLink>
      </Toolbar>
    </AppBar>
  )
}
