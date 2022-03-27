import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, MenuItem, Select, Typography } from '@material-ui/core'
import { addPistas, getCompetidores } from '../../service/api';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';


const useStyle = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 15
    }
  }
});

const validationPistas = yup.object().shape({
  competidor_id: yup.string().required("Competidor é obrigatório!"),
  pista_corrida_id: yup.string().required("Pista é obrigatória!"),
  data_corrida: yup.date().required("Data é obrigatória!"),
  tempo_gasto: yup.number().required("Tempo é obrigatório!")
});


export const AddHistoricos = () => {
  const history = useHistory();
  const classes = useStyle();
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    getAllCompetidores();
  }, []);

  const getAllCompetidores = async () => {
    const response = await getCompetidores();
    setCompetidores(response.data);
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPistas)
  });

  const addHistoricoForm = async (competidorData) => {
    await addPistas(competidorData);
    history.push('./all-pistas');
  };

  return (
    <form onSubmit={handleSubmit(addHistoricoForm)}>
      <FormGroup className={classes.container} >
        <Typography variant="h4">Adicionar Historico de Corrida</Typography>
        <FormControl>
          <Select>
            {
              competidores.map(() => (
                <MenuItem value={competidores.id}>{competidores.nome}</MenuItem>
              ))
            }
          </Select>
          {/* <InputLabel>Competidor</InputLabel>
          <Input name="competidor_id" {...register("competidor_id")} />
          <p>{errors.competidor_id?.message}</p> */}
        </FormControl>
        <FormControl>
          <InputLabel>Pista</InputLabel>
          <Input name="pista_corrida_id" {...register("pista_corrida_id")} />
          <p>{errors.pista_corrida_id?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>Data Corrida</InputLabel>
          <Input name="data_corrida" {...register("data_corrida")} />
          <p>{errors.data_corrida?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>Tempo Gasto</InputLabel>
          <Input name="tempo_gasto" {...register("tempo_gasto")} />
          <p>{errors.tempo_gasto?.message}</p>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" >Adicionar Historico de Corrida</Button>
      </FormGroup>
    </form>
  );
};
