import { Link } from 'react-router-dom';

const NavElement = (props) => {
    return(
        <Link to={props.to}>
            <li className='navElement'>
                {props.name} /
            </li>
        </Link>
    );
}

const Nav = () => {
    return(
        <ul className='is-flex aRight'>
            <NavElement to="/" name="Inicio" />
            <NavElement to="/quienessomos" name="Quienes Somos" />
            <NavElement to="/talleres" name="Talleres" />
            <NavElement to="/escuela" name="Escuelas" />
            <NavElement to="somossuyas" name="Somos Suyas" />
            <NavElement to="/mejoresdar" name="Mejor es Dar" />
            <NavElement to="/donaciones" name="Donaciones" />
        </ul>
    );
}


function Header() {
    return (
          <header className='container'>
              <div className='columns is-vcentered'>
                <div className='column is-one-third'>
                    <img className='logo' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo_TV_2015.png/200px-Logo_TV_2015.png'/>
                </div>

                <div className="column is-two-thirds has-text-right">
                    <Nav/>
                </div>

              </div>
          </header>
      );
  }
  
  export default Header;
  