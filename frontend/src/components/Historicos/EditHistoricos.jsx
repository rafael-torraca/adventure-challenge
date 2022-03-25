import { useEffect } from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import { editHistoricos } from '../../service/api';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';


const useStyle = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 15
    }
  }
});

const validationHistorico = yup.object().shape({
  competidor_id: yup.string().required("Competidor é obrigatório!"),
  pista_corrida_id: yup.string().required("Pista é obrigatório!"),
  data_corrida: yup.string().required("Data é obrigatória!"),
  tempo_gasto: yup.string().required("Tempo é obrigatório!"),

});

export const EditHistoricos = () => {
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyle();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationHistorico)
  });

  const editHistoricosForm = (historicosData) => {
    editHistoricos(historicosData);
    history.push('/all-historicos')
  };

  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/historico/${id}`)
        .then((response) => {
          reset(response.data["0"]);
        })
    } catch (e) {
      console.log(e);
    }

  }, []);

  return (
    <form onSubmit={handleSubmit(editHistoricosForm)}>
      <FormGroup className={classes.container} >
        <Typography variant="h4">Editar Histórico de Corridas</Typography>
        <FormControl>
          <InputLabel>ID do Competidor</InputLabel>
          <Input name="competidor_id" {...register("competidor_id")} />
          <p>{errors.competidor_id?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>ID da Pista</InputLabel>
          <Input name="pista_corrida_id" {...register("pista_corrida_id")} />
          <p>{errors.pista_corrida_id?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>Data da Corrida</InputLabel>
          <Input name="data_corrida" {...register("data_corrida")} />
          <p>{errors.data_corrida?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>Tempo Gasto</InputLabel>
          <Input name="tempo_gasto" {...register("tempo_gasto")} />
          <p>{errors.tempo_gasto?.message}</p>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" >Confirmar Edição</Button>
      </FormGroup>
    </form>
  );
};
