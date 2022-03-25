import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Fab, Button } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { getHistoricos } from "../../service/api"

const useStyle = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 50px'
  },
  thead: {
    '& > *': {
      backgroundColor: 'black',
      color: 'white',
      fontSize: '18px',
      font: 'bold',
    }
  },
  row: {
    '& > *': {
      fontSize: '16px',
    }
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'right',
  }
});

export const AllHistoricos = () => {
  const classes = useStyle();
  const [historicos, setHistoricos] = useState([]);

  useEffect(() => {
    getAllHistoricos();
  }, []);

  const getAllHistoricos = async () => {
    const response = await getHistoricos();
    setHistoricos(response.data);
  }


  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Id Competidor</TableCell>
            <TableCell>Id Pista Corrida</TableCell>
            <TableCell>Data Corrida</TableCell>
            <TableCell>Tempo Gasto</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            historicos.map((historicos) => (
              <TableRow key={historicos.id} className={classes.row}>
                <TableCell>{historicos.id}</TableCell>
                <TableCell>{historicos.competidor_id}</TableCell>
                <TableCell>{historicos.pista_corrida_id}</TableCell>
                <TableCell>{historicos.data_corrida}</TableCell>
                <TableCell>{historicos.tempo_gasto}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" style={{ marginRight: "10px" }} component={Link} to={`/edit-historicos/${historicos.id}`}>Edit</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table >
      <div className={classes.addButton}>
        <Fab color="primary" aria-label="add" >
          <NavLink exact to='/add-historicos' style={{ textDecoration: 'none' }}><AddCircleOutline /></NavLink>
        </Fab>
      </div>
    </>
  )
}
