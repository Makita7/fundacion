import { Link } from 'react-router-dom';

function Actividad(props) {
  return (
    <div className='row padTop'>

      <div className='col-3'>
          <img alt={props.actividad} src={props.img}/>
      </div>
      
      <div className='col-9'>
          <h4>{props.actividad}</h4>
          <p>{props.descripcion}</p>
          <Link to={props.to}>
            <img className='moreInfo' alt='mas info' src={require('../img/mas_info.png')}/>
          </Link>
      </div>

    </div>
  )
}


// Conectar esta parte de la app a firebase database para poder actualizar los recursos usados facilmente y sin necesidad de meterme al codigo

function NuestrasActividades() {
  return (
      <div className='container padTop activities padBot'>
          <h3>Nuestras Actividades</h3>

          <Actividad
            actividad='Somos Suyas'
            img={require('../img/activities.png')}
            descripcion='Minim laboris ex do irure amet nulla laboris non. Amet consectetur aute eu nulla aliquip ad. Amet sunt excepteur nostrud tempor mollit laboris. Anim commodo officia excepteur laboris do ea. Minim enim cupidatat ea deserunt mollit exercitation elit quis. Nulla adipisicing tempor laborum enim eu enim.'
            to='/somossuyas'
          />

          <Actividad
            actividad='A tu Alcance'
            img={require('../img/activities.png')}
            descripcion='Minim laboris ex do irure amet nulla laboris non. Amet consectetur aute eu nulla aliquip ad. Amet sunt excepteur nostrud tempor mollit laboris. Anim commodo officia excepteur laboris do ea. Minim enim cupidatat ea deserunt mollit exercitation elit quis. Nulla adipisicing tempor laborum enim eu enim.'
            to='/atualcance'
          />

          <Actividad
            actividad='Escuela: Mauricio Lopez'
            img={require('../img/activities.png')}
            descripcion='Minim laboris ex do irure amet nulla laboris non. Amet consectetur aute eu nulla aliquip ad. Amet sunt excepteur nostrud tempor mollit laboris. Anim commodo officia excepteur laboris do ea. Minim enim cupidatat ea deserunt mollit exercitation elit quis. Nulla adipisicing tempor laborum enim eu enim.'
            to='/escuela'
          />

          <Actividad
            actividad='Mejor es Dar'
            img={require('../img/activities.png')}
            descripcion='Minim laboris ex do irure amet nulla laboris non. Amet consectetur aute eu nulla aliquip ad. Amet sunt excepteur nostrud tempor mollit laboris. Anim commodo officia excepteur laboris do ea. Minim enim cupidatat ea deserunt mollit exercitation elit quis. Nulla adipisicing tempor laborum enim eu enim.'
            to='/mejoresdar'
          />

      </div>
  );
}

export default NuestrasActividades;