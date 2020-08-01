import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  //definir categoria
  const [categoria,guardarCategoria] = useState('');
  const [noticias,guardarNoticias] = useState([]);

  useEffect(() =>{
    const consultarAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=3bfbf5257def41d2bb5826c019e5bea6`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }

    consultarAPI();
  },[categoria]);



  return (
    <Fragment className="App">
      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />

      </div>




    </Fragment>
  );
}

export default App;
