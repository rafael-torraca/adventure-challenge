import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import { addPistas } from '../../service/api';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


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
  descricao: yup.string().required("Descrição é obrigatória!").max(40, "Apenas 40 caracteres!"),
});


export const AddPistas = () => {
  const history = useHistory()
  const classes = useStyle();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPistas)
  });


  const addPistasForm = async (competidorData) => {
    await addPistas(competidorData);
    history.push('./all-pistas');
  };

  return (
    <form onSubmit={handleSubmit(addPistasForm)}>
      <FormGroup className={classes.container} >
        <Typography variant="h4">Adicionar Pista</Typography>
        <FormControl>
          <InputLabel>Descricao</InputLabel>
          <Input name="descricao" {...register("descricao")} />
          <p>{errors.descricao?.message}</p>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" >Adicionar Pista</Button>
      </FormGroup>
    </form>
  );
};
