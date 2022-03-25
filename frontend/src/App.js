import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { AddCompetidores, AllCompetidores, EditCompetidores } from './components/Competidores';
import { AddPistas, AllPistas, EditPistas } from './components/Pistas';
import { AllHistoricos, AddHistoricos, EditHistoricos } from './components/Historicos';
import { AllCompetidoresNaoCorreram, AllCompetidoresTempoMedio, AllPistasUtilizadas } from './components/Listagem';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/all-competidores" component={AllCompetidores} />
        <Route exact path="/add-competidores" component={AddCompetidores} />
        <Route exact path="/edit-competidores/:id" component={EditCompetidores} />

        <Route exact path="/all-pistas" component={AllPistas} />
        <Route exact path="/add-pistas" component={AddPistas} />
        <Route exact path="/edit-pistas/:id" component={EditPistas} />

        <Route exact path="/all-historicos" component={AllHistoricos} />
        <Route exact path="/add-historicos" component={AddHistoricos} />
        <Route exact path="/edit-historicos/:id" component={EditHistoricos} />

        <Route exact path="/all-competidores-nao-correram" component={AllCompetidoresNaoCorreram} />
        <Route exact path="/all-competidores-tempo-medio" component={AllCompetidoresTempoMedio} />
        <Route exact path="/all-pistas-utilizadas" component={AllPistasUtilizadas} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
