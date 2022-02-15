
import { FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import Logo from '../img/logo.png';
import Donate from '../img/donate.png';

const  SocialElement = (props) => {
    return(
        <li><a href={props.link}>{props.icon}</a></li>
    );
}

const Socialmedia = () => {
    return(
        <ul className='socialmedia'>
            < SocialElement link="https://twitter.com/home" icon={ <FaTwitter/> } />
            < SocialElement link="https://twitter.com/home" icon={ <FaInstagram/> } />
            < SocialElement link="https://twitter.com/home" icon={ <FaYoutube/> } />
            < SocialElement link="https://twitter.com/home" icon={ <FaWhatsapp/> } />
        </ul>
    );
}

function Footer() {
    return (
          <footer>
              <div className="container">
                <div className="row align-middle">

                    <div className="col right">
                        <img className='donate' alt='donate button' src={Donate}/>
                    </div>
                    
                    <div className="col-2 text-center">
                    <img className='logoFooter' alt='logo' src={Logo}/>
                    </div>

                    <div className="col">
                        <Socialmedia/>
                    </div>

                </div>
              </div>
          </footer>
      );
  }
  
  export default Footer;
  