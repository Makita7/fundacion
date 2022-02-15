import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Nav = () => {
    const NavElement = (props) => {
        return(
            <Link to={props.to}>
                <li className='navElement'>
                    {props.name}
                </li>
            </Link>
        );
    }

    return(
        <ul className='flexH'>
            <NavElement to="/" name="Inicio" />
            <NavElement to="/quienessomos" name="Quienes Somos" />
            <NavElement to="/nuestrasactividades" name="Nuestras Actividades" />
            <NavElement to="/donaciones" name="Donaciones" />
        </ul>
    );
}


function Header() {
    return (
          <header className=''>
                <div className="column">
                    <Nav/>
                </div>

                <div className='column'>
                    <Link className='logo'  to='/'>
                        <img className='logo' alt='logo' src={Logo}/>
                    </Link>
                </div>

          </header>
      );
  }
  
  export default Header;
  