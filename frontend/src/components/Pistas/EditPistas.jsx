import { useEffect } from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import { editPistas } from '../../service/api';
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

const validationCompetidor = yup.object().shape({
  descricao: yup.string().required("Descrição é obrigatório!").max(40, "Apenas 40 caracteres!"),
});

export const EditPistas = () => {
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyle();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationCompetidor)
  });

  const editPistasForm = (pistasData) => {
    editPistas(pistasData);
    history.push('/all-pistas')
  };

  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/pistas/${id}`)
        .then((response) => {
          reset(response.data["0"]);
        })
    } catch (e) {
      console.log(e);
    }

  }, []);

  return (
    <form onSubmit={handleSubmit(editPistasForm)}>
      <FormGroup className={classes.container} >
        <Typography variant="h4">Editar Pista</Typography>
        <FormControl>
          <InputLabel>Descrição</InputLabel>
          <Input name="descricao" {...register("descricao")} />
          <p>{errors.descricao?.message}</p>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" >Confirmar Edição</Button>
      </FormGroup>
    </form>
  );
};
