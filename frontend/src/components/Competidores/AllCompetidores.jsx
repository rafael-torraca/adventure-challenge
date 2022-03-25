import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Fab, Button } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { getCompetidores, deleteCompetidor } from "../../service/api"

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

export const AllCompetidores = () => {
  const classes = useStyle();
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    getAllCompetidores();
  }, []);

  const getAllCompetidores = async () => {
    const response = await getCompetidores();
    setCompetidores(response.data);
  }

  const deleteCompetidoresData = async (id) => {
    await deleteCompetidor(id);
    getAllCompetidores();
  }

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Temperatura Media</TableCell>
            <TableCell>Altura</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            competidores.map((competidor) => (
              <TableRow key={competidor.id} className={classes.row}>
                <TableCell>{competidor.id}</TableCell>
                <TableCell>{competidor.nome}</TableCell>
                <TableCell>{competidor.sexo}</TableCell>
                <TableCell>{competidor.temperatura_media_corpo}</TableCell>
                <TableCell>{competidor.altura}</TableCell>
                <TableCell>{competidor.peso}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" style={{ marginRight: "10px" }} component={Link} to={`/edit-competidores/${competidor.id}`}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => deleteCompetidoresData(competidor.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table >
      <div className={classes.addButton}>
        <Fab color="primary" aria-label="add">
          <NavLink exact to='/add-competidores' style={{ textDecoration: 'none' }}><AddCircleOutline /></NavLink>
        </Fab>
      </div>
    </>
  )
}
