import React from "react";
import styles from "./Formulario.module.css";
import useSelect from '../hooks/useSelect';
const Formulario = ({guardarCategoria}) => {

  const OPCIONES = [
    {value: 'general', label:'General'},
    {value: 'business', label:'Negocios'},
    {value: 'entertaiment', label:'Entretenimiento'},
    {value: 'health', label:'Salud'},
    {value: 'science', label:'Ciencia'},
    {value: 'sports', label:'Deportes'},
    {value: 'technology', label:'Tecnologia'}
  ]

  //usar custom hook
  const [categoria, SelectNoticias] = useSelect('general',OPCIONES);

  //submit al form  pasar categoria a app.js
  const buscarNoticas = e =>{
    e.preventDefault();
    guardarCategoria(categoria);
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={buscarNoticas}
        >
          <h2 className={styles.heading}>Encuentra noticias por Categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
