import { useEffect } from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import { editCompetidores } from '../../service/api';
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
  nome: yup.string().required("Nome é obrigatório!").max(40, "Apenas 40 caracteres!"),
  sexo: yup.string().required("Sexo é obrigatório!").max(1, "Apenas M, F ou O!"),
  temperatura_media_corpo: yup.number().typeError("Campo obrigatório!").required("Temperatura Média é obrigatória!").max(38, "Temperatura máxima é 38!").min(36, "Temperatura minima é 36!"),
  peso: yup.number().typeError("Campo obrigatório!").required("Peso é obrigatório!"),
  altura: yup.number().typeError("Campo obrigatório!").required("Altura é obrigatória!").max(2.60, "A pessoa mais alta do mundo tem 2.51 ¬¬").min(0.50, "Menor que meio metro? Nem corre!")
});


export const EditCompetidores = () => {
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyle();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationCompetidor)
  });

  const editCompetidoresForm = (competidorData) => {
    editCompetidores(competidorData);
    history.push('./all-competidores')
  };

  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/competidores/${id}`)
        .then((response) => {
          reset(response.data["0"]);
        })
    } catch (e) {
      console.log(e);
    }

  }, []);

  return (
    <form onSubmit={handleSubmit(editCompetidoresForm)}>
      <FormGroup className={classes.container} >
        <Typography variant="h4">Editar Competidor</Typography>
        <FormControl>
          <InputLabel>Nome</InputLabel>
          <Input name="nome" {...register("nome")} />
          <p>{errors.nome?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>Sexo</InputLabel>
          <Input name="sexo" {...register("sexo")} />
          <p>{errors.sexo?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>Temperatura Media</InputLabel>
          <Input name="temperatura_media_corpo" {...register("temperatura_media_corpo")} />
          <p>{errors.temperatura_media_corpo?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>Altura</InputLabel>
          <Input name="altura" {...register("altura")} />
          <p>{errors.altura?.message}</p>
        </FormControl>
        <FormControl>
          <InputLabel>Peso</InputLabel>
          <Input name="peso" {...register("peso")} />
          <p>{errors.peso?.message}</p>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" >Confirmar Edição</Button>
      </FormGroup>
    </form>
  );
};
