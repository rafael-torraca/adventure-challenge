import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getCompetidoresTempoMedio } from "../../service/api"

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

export const AllCompetidoresTempoMedio = () => {
  const classes = useStyle();
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    getAllCompetidoresTempoMedio();
  }, []);

  const getAllCompetidoresTempoMedio = async () => {
    const response = await getCompetidoresTempoMedio();
    setCompetidores(response.data);
  }


  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>NOME</TableCell>
            <TableCell>SEXO</TableCell>
            <TableCell>MEDIA TEMPO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            competidores.map((competidores) => (
              <TableRow key={competidores} className={classes.row}>
                <TableCell>{competidores.nome}</TableCell>
                <TableCell>{competidores.sexo}</TableCell>
                <TableCell>{competidores.media_tempo}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table >
    </>
  )
}
