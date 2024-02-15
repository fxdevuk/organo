import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Fomulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#e8f8ff ',
      corSecundaria: '#82cffa '
    },
    {
      nome: 'Data Science',
      corPrimaria: '#f0fbe2',
      corSecundaria: '#a6d157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#fde7e8',
      corSecundaria: '#ed6869'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#fae9f5',
      corSecundaria: '#db6ebf'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#fff5d9',
      corSecundaria: '#ffba05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ffeedf',
      corSecundaria: '#ff8a29'
    },
  ] 

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
    {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Footer />

    </div>
  );
}

export default App;
