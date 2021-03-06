import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getCompetidoresNaoCorreram } from "../../service/api";

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

export const AllCompetidoresNaoCorreram = () => {
  const classes = useStyle();
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    getAllCompetidoresNaoCorreram();
  }, []);

  const getAllCompetidoresNaoCorreram = async () => {
    const response = await getCompetidoresNaoCorreram();
    setCompetidores(response.data);
  }


  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Nome Competidor</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            competidores.map((competidores) => (
              <TableRow key={competidores.id} className={classes.row}>
                <TableCell>{competidores.id}</TableCell>
                <TableCell>{competidores.nome}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table >
    </>
  )
}
