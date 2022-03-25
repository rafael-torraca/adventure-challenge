import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Fab, Button } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { getPistas, deletePistas } from "../../service/api"

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

export const AllPistas = () => {
  const classes = useStyle();
  const [pistas, setPistas] = useState([]);

  useEffect(() => {
    getAllPistas();
  }, []);

  const getAllPistas = async () => {
    const response = await getPistas();
    setPistas(response.data);
  }

  const deletePistasData = async (id) => {
    await deletePistas(id);
    getAllPistas();
  }

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Descricao</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            pistas.map((pistas) => (
              <TableRow key={pistas.id} className={classes.row}>
                <TableCell>{pistas.id}</TableCell>
                <TableCell>{pistas.descricao}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" style={{ marginRight: "10px" }} component={Link} to={`/edit-pistas/${pistas.id}`}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => deletePistasData(pistas.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table >
      <div className={classes.addButton}>
        <Fab color="primary" aria-label="add" >
          <NavLink exact to='/add-pistas' style={{ textDecoration: 'none' }}><AddCircleOutline /></NavLink>
        </Fab>
      </div>
    </>
  )
}
