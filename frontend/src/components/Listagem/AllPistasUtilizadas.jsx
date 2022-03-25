import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getPistasUtilizadas } from "../../service/api"

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

export const AllPistasUtilizadas = () => {
  const classes = useStyle();
  const [pistas, setPistas] = useState([]);

  useEffect(() => {
    getAllPistasUtilizadas();
  }, []);

  const getAllPistasUtilizadas = async () => {
    const response = await getPistasUtilizadas();
    setPistas(response.data);

  }


  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>ID PISTA</TableCell>
            <TableCell>DESCRIÇÃO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            pistas.map((pistas, key) => (
              <TableRow key={pistas} className={classes.row}>
                <TableCell>{pistas.pista_corrida_id}</TableCell>
                <TableCell>{pistas.descricao}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table >
    </>
  )
}
