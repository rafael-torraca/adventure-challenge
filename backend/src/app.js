import express from 'express';
import pistasRouter from './routes/pistasRouter';
import competidoresRouter from './routes/competidoresRouter';
import historicosRouter from './routes/historicosRouter';
import listagemRouter from './routes/listagemRouter';

// instance app
const app = express();

// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/competidores', competidoresRouter);
app.use('/pistas', pistasRouter);
app.use('/historico', historicosRouter);
app.use('/listagem', listagemRouter);

// listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Start on http://localhost:${port}`);
});
